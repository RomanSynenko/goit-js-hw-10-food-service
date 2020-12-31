const refs = {
    checkboxRef: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
};
const { checkboxRef, body } = refs;
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;
const changeTheme = () => {
    const switchTheme = checkboxRef.checked;
    switchTheme ? addTheme() : deleteTheme();
    console.log(switchTheme);
};
const addTheme = () => {
    checkboxRef.checked = true;
    body.classList.add(DARK);
    localStorage.setItem('Theme', DARK)
};
const deleteTheme = () => {
    body.classList.remove(DARK);
    localStorage.setItem('Theme', LIGHT);
};
const localStorageReader = () => {
    const saveTheme = localStorage.getItem('Theme');
    saveTheme === DARK ? addTheme() : deleteTheme();
    console.log(saveTheme);
}
localStorageReader()
checkboxRef.addEventListener('change', changeTheme);