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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

/**
 * Page Meta data
 * @class Meta
 */
class Meta extends Component {
    render() {
        const {
            metaObject: {
                name,
                title,
                meta_title,
                meta_description,
                meta_keyword,
                canonical_url
            }
        } = this.props;

        return (
            <Helmet
              title={ `ScandiPWA | ${ name || title || '...' }` }
              meta={ [
                  { name: 'title', content: meta_title },
                  { name: 'description', content: meta_description },
                  { name: 'keywords', content: meta_keyword }
              ] }
              link={ [
                  { ...(canonical_url && { rel: 'canonical', href: canonical_url }) }
              ] }
            />
        );
    }
}

Meta.propTypes = {
    metaObject: PropTypes.shape({
        name: PropTypes.string,
        meta_title: PropTypes.string,
        meta_description: PropTypes.string,
        meta_keyword: PropTypes.string
    }).isRequired
};

export default Meta;
