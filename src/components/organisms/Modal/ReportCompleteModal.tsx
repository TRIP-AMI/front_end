import IconFullScreenModal from '@/components/molecules/Modal/IconFullScreenModal';

export default function ReportCompleteModal() {
  const TITLE = `Your report has been received.`;
  const SUBTITLE = `Thank you for taking the time to let us know.\nYour report is very helpful in making it\npossible to find what you are searching for.`;

  return <IconFullScreenModal title={TITLE} detail={SUBTITLE} />;
}
