import ContentTime from '@components/atoms/Text/ContentTime';
import ContentLocation from '@components/atoms/Text/ContentLocation';

function ContentTimeLocation({
  time,
  location,
}: {
  time: string;
  location: string;
}) {
  return (
    <>
      <ContentTime time={time} />
      <ContentLocation location={location} />
    </>
  );
}

export default ContentTimeLocation;
