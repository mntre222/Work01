<template>
  <div class="p-8">
    <figure class="bg-gray-100 rounded-xl p-8 shadow-md">
      <div class="pt-6 text-center space-y-4">
        <figcaption class="font-medium">
          <div class="text-gray-500 text-center">
            <li>Email : {{ email }}</li>
            <li>Phone : {{ phone }}</li>
            <li>Facebook : {{ facebook }}</li>
            <li>Address : {{ Address }}</li>
          </div>
        </figcaption>
      </div>
    </figure>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "ke.pattarapong_st@tni.ac.th",
    facebook: "tee kesornrat",
    phone: "0830072854",
    Address: "335 อ่อนนุช39 เขตสวนหลวง แขวงสวนหลวง กรุงเทพ",
  }),
};
</script>