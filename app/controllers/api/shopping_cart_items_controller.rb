class Api::ShoppingCartsItemsController < ApplicationController
    before_action :require_signin

    def create

            @shopping_cart_item = ShopingCart.new(shopping_cart_item_params)

    end

    def index
        @shopping_cart_items = current_user.shopping_cart_items
        render json: {} unless @shopping_cart_items
    end

    def destroy
        shopping_cart_item = current_user.shopping_cart_items.find(params[:id])
        shopping_cart_item.destroy
    end

    private

    def shopping_cart_item_params
        params.require(:shopping_cart_item).permit(:user_id, :product_id, :start_date)
    end
end