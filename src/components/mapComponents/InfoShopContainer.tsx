import { Places } from '@/types/places';

type Props = {
  places: Places;
};

const InfoShopContainer = ({ places }: Props) => {
  return <div>{places.name}</div>;
};

export default InfoShopContainer;
