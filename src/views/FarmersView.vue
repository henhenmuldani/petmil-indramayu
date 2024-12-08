<template>
  <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <Card
      v-for="{ imageUrl, firstName, lastName, positions } in teamList"
      :key="imageUrl"
      class="flex flex-col h-full overflow-hidden bg-muted/60 dark:bg-card group/hoverimg"
    >
      <CardHeader class="gap-0 p-0">
        <div class="h-full overflow-hidden">
          <img
            :src="imageUrl"
            alt=""
            class="w-full aspect-square object-cover transition-all duration-200 ease-linear size-full group-hover/hoverimg:scale-[1.01]"
          />
        </div>
        <CardTitle class="px-6 py-6 pb-4"
          >{{ firstName }}
          <span class="text-primary">{{ lastName }}</span>
        </CardTitle>
      </CardHeader>

      <CardContent
        v-for="(position, index) in positions"
        :key="index"
        :class="{
          'pb-0 text-muted-foreground ': true,
          'pb-4': index === positions.length - 1,
        }"
      >
        {{ position }}<span v-if="index < positions.length - 1">,</span>
      </CardContent>

      <!-- <CardFooter class="mt-auto space-x-4">
        <a
          v-for="{ name, url } in socialNetworks"
          key="name"
          :href="url"
          target="_blank"
          class="transition-all hover:opacity-80"
          :aria-label="`Visit our ${name} page`"
        >
          <component :is="socialIcon(name)" />
        </a>
      </CardFooter> -->
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// import LinkedInIcon from '@/icons/LinkedInIcon.vue'
// import GithubIcon from '@/icons/GithubIcon.vue'
// import XIcon from '@/icons/XIcon.vue'

interface TeamProps {
  imageUrl: string
  firstName: string
  lastName: string
  positions: string[]
  socialNetworks: SocialNetworkProps[]
}

interface SocialNetworkProps {
  name: string
  url: string
}

const teamList: TeamProps[] = [
  {
    imageUrl: '/src/assets/img/profile.jpg',
    firstName: 'Solihun',
    lastName: '',
    positions: ['Petani Hidroponik', 'Kecamatan Arahan'],
    socialNetworks: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/leopoldo-miranda/',
      },
      {
        name: 'Github',
        url: 'https://github.com/leoMirandaa',
      },
      {
        name: 'X',
        url: 'https://x.com/leo_mirand4',
      },
    ],
  },
  {
    imageUrl: '/src/assets/img/profile.jpg',
    firstName: 'Solihun',
    lastName: '',
    positions: ['Petani Hidroponik', 'Kecamatan Arahan'],
    socialNetworks: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/leopoldo-miranda/',
      },
      {
        name: 'Github',
        url: 'https://github.com/leoMirandaa',
      },
      {
        name: 'X',
        url: 'https://x.com/leo_mirand4',
      },
    ],
  },
  {
    imageUrl: '/src/assets/img/profile.jpg',
    firstName: 'Solihun',
    lastName: '',
    positions: ['Petani Hidroponik', 'Kecamatan Arahan'],
    socialNetworks: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/leopoldo-miranda/',
      },
      {
        name: 'Github',
        url: 'https://github.com/leoMirandaa',
      },
      {
        name: 'X',
        url: 'https://x.com/leo_mirand4',
      },
    ],
  },
  {
    imageUrl: '/src/assets/img/profile.jpg',
    firstName: 'Solihun',
    lastName: '',
    positions: ['Petani Hidroponik', 'Kecamatan Arahan'],
    socialNetworks: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/leopoldo-miranda/',
      },
      {
        name: 'Github',
        url: 'https://github.com/leoMirandaa',
      },
      {
        name: 'X',
        url: 'https://x.com/leo_mirand4',
      },
    ],
  },
  {
    imageUrl: '/src/assets/img/profile.jpg',
    firstName: 'Solihun',
    lastName: '',
    positions: ['Petani Hidroponik', 'Kecamatan Arahan'],
    socialNetworks: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/leopoldo-miranda/',
      },
      {
        name: 'Github',
        url: 'https://github.com/leoMirandaa',
      },
      {
        name: 'X',
        url: 'https://x.com/leo_mirand4',
      },
    ],
  },
  {
    imageUrl: '/src/assets/img/profile.jpg',
    firstName: 'Solihun',
    lastName: '',
    positions: ['Petani Hidroponik', 'Kecamatan Arahan'],
    socialNetworks: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/leopoldo-miranda/',
      },
      {
        name: 'Github',
        url: 'https://github.com/leoMirandaa',
      },
      {
        name: 'X',
        url: 'https://x.com/leo_mirand4',
      },
    ],
  },
  {
    imageUrl: '/src/assets/img/profile.jpg',
    firstName: 'Solihun',
    lastName: '',
    positions: ['Petani Hidroponik', 'Kecamatan Arahan'],
    socialNetworks: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/leopoldo-miranda/',
      },
      {
        name: 'Github',
        url: 'https://github.com/leoMirandaa',
      },
      {
        name: 'X',
        url: 'https://x.com/leo_mirand4',
      },
    ],
  },
  {
    imageUrl: '/src/assets/img/profile.jpg',
    firstName: 'Solihun',
    lastName: '',
    positions: ['Petani Hidroponik', 'Kecamatan Arahan'],
    socialNetworks: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/leopoldo-miranda/',
      },
      {
        name: 'Github',
        url: 'https://github.com/leoMirandaa',
      },
      {
        name: 'X',
        url: 'https://x.com/leo_mirand4',
      },
    ],
  },
  {
    imageUrl: '/src/assets/img/profile.jpg',
    firstName: 'Solihun',
    lastName: '',
    positions: ['Petani Hidroponik', 'Kecamatan Arahan'],
    socialNetworks: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/leopoldo-miranda/',
      },
      {
        name: 'Github',
        url: 'https://github.com/leoMirandaa',
      },
      {
        name: 'X',
        url: 'https://x.com/leo_mirand4',
      },
    ],
  },
  {
    imageUrl: '/src/assets/img/profile.jpg',
    firstName: 'Solihun',
    lastName: '',
    positions: ['Petani Hidroponik', 'Kecamatan Arahan'],
    socialNetworks: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/leopoldo-miranda/',
      },
      {
        name: 'Github',
        url: 'https://github.com/leoMirandaa',
      },
      {
        name: 'X',
        url: 'https://x.com/leo_mirand4',
      },
    ],
  },
]

// const socialIcon = (socialName: string) => {
//   switch (socialName) {
//     case 'LinkedIn':
//       return LinkedInIcon

//     case 'Github':
//       return GithubIcon

//     case 'X':
//       return XIcon
//   }
// }
</script>

<style lang="scss" scoped></style>
