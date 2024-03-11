import { Input } from "@/components/atoms/Input/Input";
import { Row } from "@/components/atoms/Row/Row";
import { Select } from "@/components/atoms/Select/Select";
import { FormFields } from "@/components/organisms/FormFields/FormFields";

type Props = {
  namePrefix?: string;
};

export const AddressFields = ({ namePrefix }: Props) => {
  return (
    <FormFields>
      <Select
        label="Country"
        name={`${namePrefix}.country`}
        options={["Canada", "United States"]}
      />
      <Row>
        <Input label="First Name" name={`${namePrefix}.firstName`} />
        <Input label="Last Name" name={`${namePrefix}.lastName`} />
      </Row>
      <Input label="Address" name={`${namePrefix}.address`} />
      <Input label="Suite (Optional)" name={`${namePrefix}.suite`} />
      <Row>
        <Input label="City" name={`${namePrefix}.city`} />
        <Select
          label="Province"
          name="address.province"
          options={["Ontario", "Quebec", "British Columbia"]}
        />
        <Input label="Postal Code" name={`${namePrefix}.zip`} />
      </Row>
      <Input label="Phone (Optional)" name={`${namePrefix}.phone`} />
    </FormFields>
  );
};
