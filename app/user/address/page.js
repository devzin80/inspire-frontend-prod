import ReusableBackBtn from "@/components/ReusableBackBtn";
import UserAddress from "@/components/UserAddress";

export default async function Address() {
  
    return (
        <div>
            <ReusableBackBtn path={'Address'} />
            <UserAddress />
        </div>
    );
}