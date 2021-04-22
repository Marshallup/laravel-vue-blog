<template>
    <ckeditor :editor="editor" v-model="editorContent" :config="editorConfig"></ckeditor>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import '@ckeditor/ckeditor5-build-classic/build/translations/ru'

export default {
    props: {
        value: {
            type: String,
            default: '<p>Some content</p>'
        },
        items: {
            type: Array,
            default: () => [
                'heading', '|',
                'fontfamily', 'fontsize', '|',
                'alignment', '|',
                'fontColor', 'fontBackgroundColor', '|',
                'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
                'link', '|',
                '-',
                'outdent', 'indent', '|',
                'bulletedList', 'numberedList', 'todoList', '|',
                'code', 'codeBlock', '|',
                'insertTable', '|',
                'ckfinder', 'blockQuote', '|',
                'undo', 'redo'
            ]
        },
        toolbar: {
            shouldNotGroupWhenFull: true
        }
    },
    data () {
        return {
            editor: ClassicEditor,
            editorConfig: {
                language: 'ru',
                // plugins: [],
                toolbar: {
                    items: this.items
                },
                heading: {
                    options: [
                        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                        { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                        { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                        // CUSTOM HEADING
                        {
                            model: 'headingFancy',
                            view: {
                                name: 'h2',
                                classes: 'fancy'
                            },
                            title: 'Heading 2 (fancy)',
                            class: 'ck-heading_heading2_fancy',

                            // It needs to be converted before the standard 'heading2'.
                            converterPriority: 'high'
                        }
                    ]
                },
                ckfinder: {
                    uploadUrl: '/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',
                    options: {
                        resourceType: 'Images'
                    },
                    // openerMethod: 'popup'
                },
                // plugins: [
                //     // BoldPlugin,
                //     // LinkPlugin
                // ]
            },
        }
    },
    computed: {
      editorContent: {
          get() {
              return this.value;
          },
          set(v) {
              this.$emit('input', v)
          }
      }
    },
    components: {
        'ckeditor': CKEditor.component
    },
    mounted() {
        if (!document.querySelector('#ckfinder-script')) {
            const script = document.createElement('script');
            script.id = 'ckfinder-script';
            script.async = true;
            script.src = '/ckfinder/ckfinder.js';
            document.body.append(script);
        }
    },
}
</script>

<style scoped>

</style>
