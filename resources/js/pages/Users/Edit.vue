<template>
  <div>
      <section class="mb-10">
            <title-board boardTitle="Edit Users" boardText="View and edit user information"
                :hostName="$page.auth.settings.app_url" boardImgLink="img/board_img/user.svg">
                <breadcrumb>
                    <inertia-link :href="$route.relativePath('users.view')" class="text-primary-100 hover:text-white">User</inertia-link>
                    <b-seperator/>
                    <a href="#" class="hover:text-white">Edit Users</a>
                </breadcrumb>
            </title-board>
        </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>