var toggleSkillsBtn = document.getElementById('ToggleSkillsBtn');
var skillsSection = document.getElementById('SkillsSection');
toggleSkillsBtn.addEventListener('click', function () {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
