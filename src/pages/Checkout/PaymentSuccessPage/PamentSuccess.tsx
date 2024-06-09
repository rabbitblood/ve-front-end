import { useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/lib/redux/reduxDispatcher";
import { clearCart } from "@/lib/redux/store/cartSlice";
import BasicLayout from "@/components/page/BasicLayout/BasicLayout";
import { useEffect, useState } from "react";
import { getServerData } from "@/lib/VeProduct/retrieveServerData";

export default function PaymentSuccess() {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [paymentData, setPaymentData] = useState<any>({});

  useEffect(() => {
    if (!searchParams) {
      return;
    }
    getServerData(
      "/stripe/get-payment-data-by-id?paymentid=" +
        searchParams.get("paymentid")
    ).then((data) => {
      console.log(data);
      setPaymentData(data);
    });
  }, [searchParams]);

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <BasicLayout>
      <div>
        <h1>Payment Success</h1>
        <p>Receipt will be send to your email: {paymentData.receipt_email}</p>
      </div>
    </BasicLayout>
  );
}
