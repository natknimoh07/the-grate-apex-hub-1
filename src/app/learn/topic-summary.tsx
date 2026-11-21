import { router, useLocalSearchParams } from 'expo-router';

import { TopicSummaryPage } from '@/components/learning/quick-summaries';
import { ErrorScreen } from '@/components/ui/state-views';
import { getTopic } from '@/data/curriculum';
import { param, routes } from '@/lib/routes';

export default function TopicSummaryRoute() {
  const params = useLocalSearchParams<{ topic?: string | string[] }>();
  const topicId = param(params.topic);
  const topic = getTopic(topicId);

  if (!topic) {
    return (
      <ErrorScreen
        title="Topic summary not found"
        message={topicId ? `There is no published topic called “${topicId}”.` : 'This link does not name a topic.'}
        primary={{ label: 'Go to Study', onPress: () => router.replace(routes.learn()) }}
      />
    );
  }

  return <TopicSummaryPage topic={topic} />;
}
