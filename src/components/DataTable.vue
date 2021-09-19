<template>
  <div class="data_table">

    <h1>Platform analytics</h1>

    <md-table v-model="users" md-sort="name" md-sort-order="asc" md-card>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Platform" md-sort-by="platform">{{ item.platform }}</md-table-cell>
        <md-table-cell md-label="Mentions" md-sort-by="mentions" md-numeric>{{ item.mentions }}</md-table-cell>
        <md-table-cell md-label="Sentiment" md-sort-by="sentiment" :class="[ item.sentiment ]">
          <strong>{{ item.sentiment }}</strong>
        </md-table-cell>
        <md-table-cell md-label="Positive" md-sort-by="positive" md-numeric>{{ item.positive }}%</md-table-cell>
        <md-table-cell md-label="Neutral" md-sort-by="neutral" md-numeric>{{ item.neutral }}%</md-table-cell>
        <md-table-cell md-label="Negative" md-sort-by="negative" md-numeric>{{ item.negative }}%</md-table-cell>
        <md-table-cell md-label="Entities">
          {{ item.entities[0] }}, <br>
          {{ item.entities[1] }}, <br>
          {{ item.entities[2] }}
        </md-table-cell>
        <md-table-cell md-label="Key phrases" md-sort-by="title">
          {{ item.keyPhrases[0] }}, <br>
          {{ item.keyPhrases[1] }}, <br>
          {{ item.keyPhrases[2] }}
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'TableSort',
  data: () => ({
    users: [
      {
        platform: 'facebook',
        mentions: 642,
        sentiment: 'Positive',
        positive: 88,
        neutral: 8,
        negative: 4,
        entities: ['IKEA group', 'Organization', 'supply'],
        keyPhrases: ['IKEA brand', 'family farm', 'retail sector']
      },
      {
        platform: 'Twitter',
        mentions: 941,
        sentiment: 'Positive',
        positive: 70,
        neutral: 19,
        negative: 11,
        entities: ['2009–2014', 'Inter IKEA Group', 'supply'],
        keyPhrases: ['largest furniture retailer',
          'largest users',
          '378 IKEA stores']
      },
      {
        platform: 'Instagram',
        mentions: 2.484,
        sentiment: 'Positive',
        positive: 97,
        neutral: 1,
        negative: 2,
        entities: ['IKEA group', 'Organization', 'supply'],
        keyPhrases: ['IKEA brand', 'family farm', 'retail sector']
      },
      {
        platform: 'Youtube',
        mentions: 1.761,
        sentiment: 'Mixed',
        positive: 47,
        neutral: 12,
        negative: 41,
        entities: ['2009–2014', 'Inter IKEA Group', 'supply'],
        keyPhrases: ['largest furniture retailer',
          'largest users',
          '378 IKEA stores']
      },
      {
        platform: 'LinkedIn',
        mentions: 157,
        sentiment: 'Negative',
        positive: 28,
        neutral: 24,
        negative: 48,
        entities: ['IKEA group', 'Organization', 'supply'],
        keyPhrases: ['IKEA brand', 'family farm', 'retail sector']
      }
    ]
  })
}
</script>

<style scoped lang="scss">
.md-table-cell,
.md-table-head {
  font-size: 16px !important;
}

.Positive {
  color: var(--color-secondary-500);
}

.Mixed {
  color: var(--color-tertiary-500);
}

.Negative {
  color: var(--color-danger-500);
}

</style>