import React from 'react';
import { connect } from 'react-redux';

import '../styles/TruckDetailsCard.scss';

function TruckDetailsCard(props) {
  function renderMissingTruckDetailsCard() {
    return props.missingTruck.map((truck) => {
      return (
        <div className='missing-truck'>
          <div className='icon-title-value'>
            <div className='left-tag'></div>
            <div className='icon'></div>
            <div className='title'>Missing Truck</div>
            <div className='value'>{`Value : ${truck.value}`}</div>
          </div>
          <div className='trip-source-destination-details'>
            <div className='trip-details'>
              <div className='trip-id'>{`Trip id : ${truck.tripId}`}</div>
              <div className='trip-transporter'>{`Transporter : ${truck.transporter}`}</div>
            </div>
            <div className='vertical-line'></div>
            <div className='source-destination'>
              <div className='source'>{`From : ${truck.from}`}</div>
              <div className='destination'>{`To : ${truck.to}`}</div>
            </div>
          </div>
          <div className='driver-details-last-known-location-details'>
            <div className='driver-details'>
              <div className='heading'>Driver Details</div>
              <div className='content'>{`${truck.driverDetails.driverName} (${truck.driverDetails.driverContact})`}</div>
            </div>
            <div className='vertical-line'></div>
            <div className='last-known-details'>
              <div className='heading'>Last known details</div>
              <div className='content'>{`${truck.lastKnownDetails.location} (${truck.lastKnownDetails.timestamp})`}</div>
            </div>
          </div>
        </div>
      );
    });
  }
  function renderDetentionTruckDetailsCard() {
    return props.detentionTruck.map((truck) => {
      return (
        <div className='detention-truck'>
          <div className='icon-title-value'>
            <div className='left-tag'></div>
            <div className='icon'></div>
            <div className='title'>Detention Truck</div>
            <div className='value'>{`Value : ${truck.value}`}</div>
          </div>
          <div className='trip-source-destination-details'>
            <div className='trip-details'>
              <div className='trip-id'>{`Trip id : ${truck.tripId}`}</div>
              <div className='trip-transporter'>{`Transporter : ${truck.transporter}`}</div>
            </div>
            <div className='vertical-line'></div>
            <div className='source-destination'>
              <div className='source'>{`From : ${truck.from}`}</div>
              <div className='destination'>{`To : ${truck.to}`}</div>
            </div>
          </div>
          <div className='driver-details-checkpoint-details'>
            <div className='driver-details'>
              <div className='heading'>Driver Details</div>

              <div className='content'>{`${truck.driverDetails.driverName} (${truck.driverDetails.driverContact})`}</div>
            </div>
            <div className='vertical-line'></div>
            <div className='checkpoint-details'>
              <div className='heading'>Checkpoint details</div>

              <div className='content'>{`${truck.checkpointDetails.location} (${truck.checkpointDetails.timestamp})`}</div>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className='truck-card'>
      {renderMissingTruckDetailsCard()}
      {renderDetentionTruckDetailsCard()}
    </div>
  );
}

const mapStateToProps = ({ truckDetails }) => {
  let missingTruck = truckDetails.missingTruck;
  let detentionTruck = truckDetails.detentionTruck;
  return { missingTruck: missingTruck, detentionTruck: detentionTruck };
};

export default connect(mapStateToProps, {})(TruckDetailsCard);
