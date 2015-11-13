//author @huntbao
'use strict'
import './modal.styl'
import React from 'react'
import classNames from 'classnames'
import AppConstants from '../../constants/constants'
import ModalAction from '../../actions/modalaction'
import EditCollHost from './edit.coll.host.jsx'
import EditFolderHost from './edit.folder.host.jsx'
import TipModal from './tip.modal.jsx'
import LeavingDirtyTabModal from './leaving.dirty.tab.modal.jsx'
import CreateCollectionModal from './create.collection.modal.jsx'
import CreateFolderModal from './create.folder.modal.jsx'
import DeleteCollectionModal from './deleting.collection.modal.jsx'
import DeleteFolderModal from './deleting.folder.modal.jsx'

class Modal extends React.Component {

    render() {
        let classes = classNames({
            'mod-modal': true,
            'modal-open': this.props.modal.open
        })
        return (
            <div className={classes} onClick={(e)=>{this.onClick(e)}}>
                <div className="modal-wrap" onClick={(e)=>{this.onClickBody(e)}}>
                    <div className="modal-hd">
                        <div className="modal-title">{this.props.modal.title}</div>
                        <div className="modal-close" onClick={(e)=>{this.onClickClose(e)}}>
                            <em className="glyphicon glyphicon-remove"></em>
                        </div>
                    </div>
                    {this.getBody()}
                </div>
            </div>
        )
    }

    getBody() {
        switch (this.props.modal.type) {
            case AppConstants.MODAL_EDIT_COLL_HOST:
                return (
                    <EditCollHost modal={this.props.modal} />
                )

            case AppConstants.MODAL_EDIT_FOLDER_HOST:
                return (
                    <EditFolderHost modal={this.props.modal} />
                )

            case AppConstants.MODAL_SAVE_BLANK_URL_TIP:
                return (
                    <TipModal modal={this.props.modal} />
                )

            case AppConstants.MODAL_LEAVING_DIRTY_TAB:
                return (
                    <LeavingDirtyTabModal modal={this.props.modal} />
                )

            case AppConstants.MODAL_CREATE_COLLECTION:
                return (
                    <CreateCollectionModal modal={this.props.modal} />
                )

            case AppConstants.MODAL_CREATE_FOLDER:
                return (
                    <CreateFolderModal modal={this.props.modal} />
                )

            case AppConstants.MODAL_DELETE_COLLECTION:
                return (
                    <DeleteCollectionModal modal={this.props.modal} />
                )

            case AppConstants.MODAL_DELETE_FOLDER:
                return (
                    <DeleteFolderModal modal={this.props.modal} />
                )

            default:
                break
        }
    }

    onClick(evt) {
        this.close()
    }

    onClickBody(evt) {
        evt.stopPropagation()
    }

    onClickClose(evt) {
        this.close()
    }

    close() {
        ModalAction.closeModal()
    }
}

export default Modal
