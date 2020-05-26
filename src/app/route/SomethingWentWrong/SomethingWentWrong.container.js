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

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateMeta } from 'Store/Meta';
import SomethingWentWrong from './SomethingWentWrong.component';

export const mapDispatchToProps = middleware(
    dispatch => ({
        updateMeta: meta => dispatch(updateMeta(meta))
    }),
    'Route/SomethingWentWrong/Container/mapDispatchToProps'
);

export class SomethingWentWrongContainer extends ExtensiblePureComponent {
    static propTypes = {
        updateMeta: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { updateMeta } = this.props;

        updateMeta({ title: __('Something went wrong!') });
    }

    render() {
        return (
            <SomethingWentWrong
              { ...this.props }
            />
        );
    }
}

export default connect(null, mapDispatchToProps)(
    middleware(SomethingWentWrongContainer, 'Route/SomethingWentWrong/Container')
);