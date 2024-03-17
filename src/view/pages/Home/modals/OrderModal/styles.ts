import styled from 'styled-components';

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-weight: 500;
    font-size: 0.875rem;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 1rem;
    flex: 1;

    .item {
      display: flex;

      & + .item {
        margin-top: 1rem;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 0.875rem;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 0.75rem;
      }

      .product-details {
        margin-left: 0.25rem;

        strong {
          display: block;
          margin-bottom: 0.25rem;
        }

        span {
          font-size: 0.875rem;
          color: #666;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-weight: 500;
      font-size: 0.875rem;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    background: #333;
    border-radius: 3rem;
    border: 0;
    color: #fff;
    padding: 0.75rem 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

  }
  .secondary {
    padding: 0.875rem 24px;
    color: #D73035;
    font-weight: bold;
    border: 0;
    background: transparent;
    margin-top: 0.75rem;
  }
`;

