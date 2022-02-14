// This SVG file import will be handled by webpack's raw-text loader.
// This means that imageIcon will hold the source SVG.
import attachmentIcon from '../assets/icons/attachment.svg';

import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class CustomFileUpload extends Plugin {
  constructor(execute) {
    super();
    this.execute = execute;
  }

  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add( 'customFileUpload', locale => {
      const view = new ButtonView( locale );

      view.set({
        label: 'Attach file',
        icon: attachmentIcon,
        tooltip: true
      });

      // Callback executed once the image is clicked.
      view.on('execute', this.execute );

      return view;
    });
  }
}