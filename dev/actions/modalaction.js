//author @huntbao
'use strict'

import AppConstants from '../constants/constants'
import AppDispatcher from '../dispatcher/dispatcher'

class ModalAction  {

    static closeModal() {
        AppDispatcher.dispatch({
            actionType: AppConstants.MODAL_CLOSE
        })
    }

    static openModal() {
        AppDispatcher.dispatch({
            actionType: AppConstants.MODAL_OPEN
        })
    }

    static openEditCollHostModal(collection) {
        AppDispatcher.dispatch({
            actionType: AppConstants.MODAL_EDIT_COLL_HOST,
            collection: collection
        })
    }

    static openAddFolderModal(collection) {
        AppDispatcher.dispatch({
            actionType: AppConstants.MODAL_CREATE_FOLDER,
            collection: collection
        })
    }

    static openDeleteCollModal(collection) {
        AppDispatcher.dispatch({
            actionType: AppConstants.MODAL_DELETE_COLLECTION,
            collection: collection
        })
    }

    static openEditFolderHostModal(folder) {
        AppDispatcher.dispatch({
            actionType: AppConstants.MODAL_EDIT_FOLDER_HOST,
            folder: folder
        })
    }

    static openSavingBlankURLTip() {
        AppDispatcher.dispatch({
            actionType: AppConstants.MODAL_SAVE_BLANK_URL_TIP
        })
    }

    static openLeavingDirtyTab(data) {
        AppDispatcher.dispatch({
            actionType: AppConstants.MODAL_LEAVING_DIRTY_TAB,
            data: data
        })
    }

    static openCreateCollModal() {
        AppDispatcher.dispatch({
            actionType: AppConstants.MODAL_CREATE_COLLECTION
        })
    }

    static openDeleteFolderModal(folder) {
        AppDispatcher.dispatch({
            actionType: AppConstants.MODAL_DELETE_FOLDER,
            folder: folder
        })
    }

}

export default ModalAction
