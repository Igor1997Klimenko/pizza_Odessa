/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import styles from './DescriptionPizza.module.scss'

export const DescriptionPizza: FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string
    title: string
    price: number
  }>()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const { data } = await axios.get(
          `https://62727f8825fed8fcb5f54bcd.mockapi.io/items/${id}`
        )
        setPizza(data)
      } catch (error) {
        alert(error)

        navigate('/')
      }
    }
    fetchPizzas()
  }, [id])

  return (
    <div className="container">
      {pizza && (
        <div className={styles.root}>
          <img src={pizza.imageUrl} alt={pizza.title} />
          <h2>{pizza.title}</h2>
          <h4>{pizza.price} грн</h4>
          <span>
            <Link to="/" className="button button--black">
              Back
            </Link>
          </span>
        </div>
      )}
    </div>
  )
}
