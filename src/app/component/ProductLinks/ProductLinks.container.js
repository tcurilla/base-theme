
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ProductType } from 'Type/ProductList';

import ProductLinks from './ProductLinks.component';

export const mapStateToProps = middleware(
    state => ({
        linkedProducts: state.LinkedProductsReducer.linkedProducts
    }),
    'Component/ProductLinks/Container/mapStateToProps'
);

export class ProductLinksContainer extends ExtensiblePureComponent {
    static propTypes = {
        linkedProducts: PropTypes.objectOf(ProductType).isRequired,
        linkType: PropTypes.string.isRequired
    };

    render() {
        const {
            linkType,
            linkedProducts: {
                [linkType]: {
                    items = []
                } = {}
            }
        } = this.props;

        if (items.length === 0) {
            return null;
        }

        return (
            <ProductLinks
              { ...this.props }
            />
        );
    }
}

export default connect(mapStateToProps)(
    middleware(ProductLinksContainer, 'Component/ProductLinks/Container')
);