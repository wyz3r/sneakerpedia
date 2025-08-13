import CATEGORIES from '@/data/storeCategoryMap';

const PopupComponent = ({
  description,
  name,
  profilePhoto,
  address,
  onlineStore,
  storeCategory,
}: any) => {
  const recortarProtocoloSimple = (url: string) => {
    if (url === undefined) return;
    return url.replace(/^(https?:\/\/)/, '');
  };

  return (
    <div className="marker-info">
      <div className="marker-image">
        <div className="marker-image-wrapper">
          <img
            className="rounded-tl-xl rounded-tr-xl"
            src={profilePhoto === undefined ? 'https://placehold.co/600x400' : profilePhoto}
            alt="image"
          />
        </div>
      </div>

      <h3 className=" text-[1.45rem] font-medium m-[0_0_0_0]">{name}</h3>

      <div className="mt-1 mb-3">
        <i> {CATEGORIES?.get(storeCategory)}</i>
      </div>

      <div className="marker-content">
        <div>
          <strong>Location:</strong>
          {' ' + address} <br />
          <strong>online Store:</strong>{' '}
          <a className="maps-target" href={onlineStore} target="_blank">
            {recortarProtocoloSimple(onlineStore)}
          </a>
        </div>
        <br />

        <div className="border-t-[1px] border-solid border-[rgba(256,256,256,0.4)]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default PopupComponent;
