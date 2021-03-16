export const Tabs = {
    props:{
        user: {
            type: Object,
            default(){
                return {}
            }
        },
        hasCompleted:{
            default: false,
            type: Boolean
        }
    },
    methods:{
        updateProfile(){
            return this.$emit('updateProfile')
        }
    },
}