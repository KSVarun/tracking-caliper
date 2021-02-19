import React from 'react';
import { connect } from 'react-redux';

import '../styles/StatusCard.scss';

function StatusCard(props) {
  let shipmentDetails = JSON.parse(JSON.stringify(props.shipmentDetails));
  function renderHelper(className, cardObj) {
    return (
      <div className={className}>
        <div className='title'>{cardObj.title}</div>
        <div className='count-amount'>
          <div className='count'>{cardObj.count}</div>
          <div className='amount'>{cardObj.amount}</div>
        </div>
        <div className='horizantal-divider'></div>
        <div className='percentages'>
          <div className='initial-percentage-change'>
            {cardObj.initialPercentChange}
          </div>
          <div className='final-percentage-change'>
            {cardObj.finalPercentChange}
          </div>
        </div>
      </div>
    );
  }
  function renderTotalCard() {
    let totalCardObj = JSON.parse(JSON.stringify(props.shipmentDetails.total));
    totalCardObj['title'] = 'TOTAL TRIPS';
    return renderHelper('total-card', totalCardObj);
  }

  function renderTrackedCards(shipmentDetails) {
    let cards = [];
    for (let shipmentDetail in shipmentDetails) {
      if (shipmentDetail !== 'total' && shipmentDetail !== 'untracked') {
        if (shipmentDetail === 'onTime') {
          shipmentDetails[shipmentDetail]['title'] = 'ON-TIME';
          cards.push(
            renderHelper('on-time-card', shipmentDetails[shipmentDetail])
          );
        } else {
          shipmentDetails[shipmentDetail][
            'title'
          ] = shipmentDetail.toUpperCase();
          cards.push(
            renderHelper(
              `${shipmentDetail}-card`,
              shipmentDetails[shipmentDetail]
            )
          );
        }
      }
    }
    return cards;
  }

  function renderUntrackedCards(shipmentDetails) {
    let cards = [];
    for (let shipmentDetail in shipmentDetails) {
      if (shipmentDetail === 'untracked') {
        shipmentDetails[shipmentDetail]['title'] = 'UN-TRACKED';
        cards.push(
          renderHelper(
            `${shipmentDetail}-card`,
            shipmentDetails[shipmentDetail]
          )
        );
      }
    }
    return cards;
  }

  return (
    <div className='status-cards'>
      {renderTotalCard(shipmentDetails)}
      <div className='tracked-cards'>
        {' '}
        <div className='header'>
          <div className='title'>TRACKED</div>
          <div className='horizantal-line'></div>
        </div>
        <div className='cards'>{renderTrackedCards(shipmentDetails)}</div>
      </div>
      <div className='un-tracked-cards'>
        {' '}
        <div className='header'>
          <div className='title'>UN-TRACKED</div>
          <div className='horizantal-line'></div>
        </div>
        <div className='cards'>{renderUntrackedCards(shipmentDetails)}</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  let shipmentDetails = state.shipmentDetails;
  return { shipmentDetails: shipmentDetails };
};

export default connect(mapStateToProps, {})(StatusCard);
