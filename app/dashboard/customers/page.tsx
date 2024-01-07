import CustomersTable2 from "@/app/ui/customers/table2";
import { fetchCustomers } from '@/app/lib/data';


const page = async () => {
  const customers = await fetchCustomers();
  return (
    <div>
      <CustomersTable2 customers={customers} />
    </div>
  )
}
export default page;