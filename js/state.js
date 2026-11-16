/* js/state.js */
/* ---------- State ---------- */
let card = null;
let password = sessionStorage.getItem('adminpw') || '';
const $ = (id) => document.getElementById(id);
const THEMES = {
  lime: { bg:'#0b1437', accent:'#c6f432', ink:'#0b1437', text:'#ffffff' },
  sky:  { bg:'#0a1a2f', accent:'#38bdf8', ink:'#06223a', text:'#ffffff' },
  rose: { bg:'#2a0a1a', accent:'#fb7185', ink:'#2a0a1a', text:'#ffffff' },
  gold: { bg:'#1c1405', accent:'#fbbf24', ink:'#1c1405', text:'#ffffff' }
};

/* Owner mode: edit button shows only on devices where the owner logged in, or via yoursite.com/#edit */
const isOwner = () => localStorage.getItem('owner') === '1';
const applyOwner = () => document.body.classList.toggle('owner', isOwner());
applyOwner();

function toast(msg, bad) {
  const t = $('toast'); t.textContent = msg; t.classList.toggle('bad', !!bad); t.classList.add('show');
  clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2800);
}
