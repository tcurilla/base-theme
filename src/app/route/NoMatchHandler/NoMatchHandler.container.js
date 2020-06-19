/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NoMatchDispatcher } from 'Store/NoMatch';
import { HeaderAndFooterDispatcher } from 'Store/HeaderAndFooter';
import NoMatchHandler from './NoMatchHandler.component';

const mapStateToProps = state => ({
    noMatch: state.NoMatchReducer.noMatch
});

const mapDispatchToProps = dispatch => ({
    updateNoMatch: (options) => {
        NoMatchDispatcher.updateNoMatch(dispatch, options);
    },

    updateToggleHeaderAndFooter: (options) => {
        HeaderAndFooterDispatcher.toggleHeaderAndFooter(dispatch, options);
    }
});

const NoMatchHandlerContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(NoMatchHandler));

export default NoMatchHandlerContainer;
