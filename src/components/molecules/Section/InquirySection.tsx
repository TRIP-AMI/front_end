import DropToggle from '@components/molecules/Toggle/DropToggle';
import { FlatList } from 'react-native';

type InquirySectionProps = {
  id: number;
  title: string;
  date: string;
  content: string;
  contentDate: string | null;
};

function InquirySection({ data }: { data: InquirySectionProps[] }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <DropToggle
          key={item.id}
          title={item.title}
          date={item.date}
          content={item.content}
          contentDate={item.contentDate}
          lastIndex={item.id === data.length}
          isInquiry
        />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default InquirySection;
