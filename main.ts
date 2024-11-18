
const toggleSkillsBtn = document.getElementById('ToggleSkillsBtn') as HTMLButtonElement;
const skillsSection = document.getElementById('SkillsSection') as HTMLElement;

toggleSkillsBtn.addEventListener('click', () => {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});
