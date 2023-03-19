<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col class="d-flex flex-column align-center">
        <AvatarCircle :url="author.avatar" :color="author.color" :letters="author.letters" size="128px" :to="!disableLink ? author.path : undefined" />
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-spacer></v-spacer>
      <v-col v-for="link in links" :key="link.to" class="d-flex flex-column align-center">
        <IconButton size="20" :src="link.src" :to="link.to" :title="link.title" />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { IAuthor } from "~/utility/content";

interface IProps {
  author: IAuthor;
  disableLink?: boolean;
}

interface ILink {
  src: string;
  to: string;
  title: string;
}

const props = defineProps<IProps>();
const links: ILink[] = [];
if (props.author.github) {
  links.push({
    src: "/github.svg",
    to: props.author.github,
    title: "GitHub",
  });
}
if (props.author.linkedin) {
  links.push({
    src: "/linkedin.svg",
    to: props.author.linkedin,
    title: "LinkedIn",
  });
}
if (props.author.nuget) {
  links.push({
    src: "/nuget.svg",
    to: props.author.nuget,
    title: "NuGet",
  });
}
if (props.author.discord) {
  links.push({
    src: "/discord.svg",
    to: props.author.discord,
    title: "Discord",
  });
}
if (props.author.steam) {
  links.push({
    src: "/steam.svg",
    to: props.author.steam,
    title: "Steam",
  });
}
</script>
