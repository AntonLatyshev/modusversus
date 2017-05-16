import {
  markupMenu
} from './markup-menu';
markupMenu(window.document);
import header from "./header";
import carousel from "./carousel";
import openclose from "./openclose";
import mobilemenu from "./mobilemenu";

$(() => {
  header();
  carousel();
  openclose();
  mobilemenu();
});
