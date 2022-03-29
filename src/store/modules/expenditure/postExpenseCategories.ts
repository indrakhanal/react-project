import { Dispatch } from "redux";
import { AppThunk } from "../..";

import { apiList } from "../../actionNames";
import initDefaultAction, {
    APIResponseDetail,
} from "../../helper/default-action";
import initDefaultReducer from "../../helper/default-reducer";
import initialState from "../../helper/default-state";


export type ExpenseCategories = {
    image: string;
};

const apiDetails = Object.freeze(
    apiList.expenditure.postExpenseCategories
);

export default function postExpenseCategoriesReducer(
    state = initialState,
    action: DefaultAction
): DefaultState<ExpenseCategories> {
    const stateCopy = Object.assign({}, state);
    const actionName = apiDetails.actionName;

    return initDefaultReducer(actionName, action, stateCopy);
}

export const postExpenseCategoriesAction = (requestData): AppThunk<APIResponseDetail<ExpenseCategories>> =>
    async (dispatch: Dispatch) => {
        return await initDefaultAction(apiDetails, dispatch, {
            disableSuccessToast: true,
            requestData
        });
    };