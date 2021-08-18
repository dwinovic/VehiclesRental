import { Button, GoBackPage, MainLayout } from '../../../src/components';
import { StyledReservationPayment } from '../../payments/[idReservation]/styled';
import Image from 'next/image';
import { IMGMalang } from '../../../src/assets';
import { Select } from '@chakra-ui/react';

const AdminApprovePayment = () => {
  return (
    <MainLayout bgFooter="gray" title="Approve Payment">
      <StyledReservationPayment className="container">
        <GoBackPage titleBack="Payment" />
        <div className="detail-vehicle">
          <div className="image-wrapper">
            <Image src={IMGMalang} alt="image" layout="fill" />
          </div>
          <div className="desc">
            <h1 className="title-vehicle">Fixie - Gray Only </h1>
            <p className="location">Yogyakarta</p>
            <p className="status default">No Prepayment</p>
            <p className="price">#FG1209878YZS</p>
            <Button type="light" className="btn-copy">
              Copy booking code
            </Button>
          </div>
        </div>
        <div className="detail-reservation">
          <div className="detail-row">
            <div className="left">
              <p className="text-nunito-bold dark">Quantity : 2 bikes</p>
            </div>
            <div className="right date-wrapper">
              <p className="text-nunito-bold dark">Reservation Date :</p>
              <p className="text-nunito-regular"> Jan 18 - 20 2021</p>
            </div>
          </div>
          <div className="detail-row">
            <div className="left order-detail">
              <p className="text-nunito-bold dark">Order details :</p>
              <p className="text-nunito-regular">1 bike : Rp. 78.000</p>
              <p className="text-nunito-regular">1 bike : Rp. 78.000</p>
              <p className="text-nunito-bold dark">Total : 178.000</p>
            </div>
            <div className="right order-detail">
              <p className="text-nunito-bold dark">Identity :</p>
              <p className="text-nunito-regular">Samantha Doe (+6290987682)</p>
              <p className="text-nunito-regular">samanthadoe@mail.com</p>
            </div>
          </div>
        </div>
        <div className="payment-method-wrapper">
          <h5 className="text-nunito-bold dark">Payment Code :</h5>
          <div className="code-copy-btn">
            <p className="invoice-code">#FG1209878YZS</p>
            <Button className="btn-copy" type="dark">
              Copy
            </Button>
          </div>
          <div className="input-group">
            <Select
              bg=" rgba(255, 255, 255, 0.5)"
              variant="filled"
              placeholder="Transfer Method"
              className="select-method"
            >
              <option value="cash">Cash</option>
              <option value="transfer">Transfer</option>
            </Select>
          </div>
        </div>
        <Button className="btn-finish" type="light">
          Approve Payments
        </Button>
      </StyledReservationPayment>
    </MainLayout>
  );
};

export default AdminApprovePayment;
