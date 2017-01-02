export function configure(aurelia) {
  aurelia.globalResources(
    './ValueConverter/take-form-to',
    './CustomAttributes/Accordion',
    './CustomElements/calendar',
    './CustomAttributes/Dropdown',
    './CustomAttributes/CheckBox',
    './CustomAttributes/Rating',
    './CustomAttributes/Modal',
    './CustomAttributes/Tooltip',
    './CustomAttributes/Menu',
    './CustomAttributes/Tab',
    './CustomElements/pagination',
    './Dialog/CreateWebDlg',
    './Dialog/DetailWebDlg',
    './Dialog/DetailWebUsersDlg',
  );
}
