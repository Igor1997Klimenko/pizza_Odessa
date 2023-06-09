import emptyImg from '../assets/images/empty-cart.png'
import { Link } from 'react-router-dom'
import { FC } from 'react'

export const CartEmpty: FC = () => (
  <div className="cart cart--empty">
    <h2>
      Корзина пустая <span>😕</span>
    </h2>
    <p>
      Вероятней всего, вы не заказывали ещё пиццу.
      <br />
      Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <img src={emptyImg} alt="emptyCart" />
    <Link to="/" className="button button--black">
      <span>Вернуться назад</span>
    </Link>
  </div>
)
