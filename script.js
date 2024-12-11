const adminData = {
    title: 'Заголовок',
    content: [
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
    ]
};

const loadAdminData = () => {
    const title = document.getElementById('title');
    const contentBlock = document.getElementById('text__content');

    title.textContent = adminData.title;

    adminData.content.forEach((text) => {
        const textBlock = document.createElement('p');
        textBlock.textContent = text;
        contentBlock.appendChild(textBlock);
    });
}

const handleSelectChangeValue = (selectElement, titleElement) => {
    selectElement.addEventListener('change', function() {
        selectElement.style.color = 'rgba(51, 51, 51, 1)';
        const selectedValue = selectElement.value;
        titleElement.textContent = `${adminData.title}: ${selectedValue}`;
    });
};

const handleSelectChangeText = (selectElement) => {
    selectElement.addEventListener('change', function() {
        selectElement.style.color = 'rgba(51, 51, 51, 1)';
        const selectedText = selectElement.options[selectElement.selectedIndex].text;
        alert(selectedText);
    });
};

document.addEventListener('DOMContentLoaded', function() {
    loadAdminData();
    handleSelectChangeValue(document.getElementById('select1'), document.getElementById('title'));
    handleSelectChangeText(document.getElementById('select2'));
});