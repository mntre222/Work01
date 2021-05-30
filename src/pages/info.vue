<template>
  <div class="p-8">
    <figure class="bg-gray-100 rounded-xl p-8 shadow-md">
      <div class="pt-6 text-center space-y-4">
        <figcaption class="font-medium">
          <div class="text-gray-500 text-center">
            <li>Name : {{ name }} {{ surname }}</li>
            <li>BirthDay : {{ date_of_birth }}</li>
            <li>Age : {{ age }}</li>
            <li>Skills : {{ skills }}</li>
            <li>Hobby : {{ hobby }}</li>
            <li>University : {{ university }}</li>
          </div>
          <div class="pt-6">
            <router-link :to="{ name: 'contact' }">
              <a class="text-gray-500 hover:text-yellow-500">
                <strong>Contact ></strong>
              </a>
            </router-link>
          </div>
        </figcaption>
      </div>
    </figure>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "Pattarapong",
    surname: "Kesornrat",
    date_of_birth: "23/03/2543",
    age: 21,
    university: "Thai-Nichi Institute of Technology",
    skills: ["PL/SQL", "SQL"],
    hobby: ["Game", "Movie", "Manga"],
  }),
};
</script>