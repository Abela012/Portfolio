// Projects data
const projects = [
  {
    id: 1,
    title: 'Book Store',
    description: 'A fully responsive Book Store website with a book catalog, cart functionality, and checkout process.',
    image: 'https://www.southernliving.com/thmb/DiILPN4-PmulZZ1zFbP7xANxbr8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/15-WilliamChrisantandSonsOldFloridaBookShop-photobyWilliamChrisant-7077d9a8033a4ac692689380e2dad7bc.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
    demoLink: '#',
    codeLink: 'https://github.com/Abela012/Book-Store'
  },
  {
    id: 2,
    title: 'cbeProject',
    description: 'An interactive CBE application that helps customers to make appointment for contact company"s manager.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0TgeqWAzhjp5s9wb5GhXSZot8E8wIKmSLiQ&s',
    tags: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
    demoLink: '#',
    codeLink: 'https://github.com/Abela012/cbeProject'
  },
  {
    id: 3,
    title: 'Campus Dating',
    description: 'A Dating app which helps campus student to comminecate each other and share files for their lecture and find their soulmate.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSuZ2gl9hCtM3-rmpUpcSbAEtD5K_VMrEoRw&s',
    tags: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
    demoLink: '#',
    codeLink: 'https://github.com/Abel9436/Campus-Students-Dating-Web-App-Front-End'
  },
  {
    id: 4,
    title: 'Car promotoin',
    description: 'A web application which a single company can promote his cars for car lovers and buyers.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ui3yLNkPA9ARWGIxjt1JiaeCNAG4_DpVOQ&s',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoLink: '#',
    codeLink: 'https://github.com/Abela012/ReactCars'
  },
  {
    id: 5,
    title: 'Next',
    description: 'A next js project using typescript doing a specific project.',
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAb1BMVEUAAAD///8fHx+4uLjHx8dDQ0Pi4uJeXl57e3uFhYXw8PCxsbH09PTKysq1tbUcHByQkJA9PT0yMjIQEBC9vb3p6elsbGxycnJXV1csLCyamppnZ2cJCQmrq6sxMTGjo6PV1dVNTU2RkZEVFRUdHR1qUacuAAADBUlEQVR4nO3b6XKiQBSG4T4orqCgKFFj1Dj3f42DcesFJloVh0C/zw8ji6nOV3R7uiFKAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBrvNfdgAYJCOthwazuFjTIW90NaJDBvO4WNMfyUHcLmiMc1t2CBhnX3YAGyVZ1t6A51nTCh23iulvQHNMRpfvDFpSjD8smdbfgv5t2tu7Oj0nHkC3V2i4ShpHaZJfjk+v5WbtH/EBk5+wMZd/Vxbk6WKelEqplfDkeRdcT2x5Wt/izLaG4w1EifX0zWmsb3d7PN+w3CiTPFvbO0AzmbB9pG5kRjz9hJSqyh63SsOZyL6sGYpTuPoXVF2vpoDSs4rTk8m4l5tjkU1hqPDJ3loeltpKe3yys0t2fsAbF68jsiBVhqcV5dBuLteDnV1ih2RGrwvqQU7W1kY2136+w1Fr/qqsMqxjYl+ooTunuWViqp1foZXXWWVdUb+Tu9SysDz2fUHZDndZHo8j+6lT+hXWa692EEo00erX+KXv3l3gXltp3bjuru+FMeuLO//wLK7iP6pUDvOotVObOJf0LS+W3jlgZ1lZmRVHmzCU9DEvF3cubqrA2XxOeg1M7+BiWKqqoLxVhTS9T6c/reVduWO28RWaE1Zfzz4qwbos0sUyNA2ZY6zTtrDttjMsIS3XOHbE8rN2twprL3jhihTUb5ipt44NIZlgqyk+vpWG9yb3c6puLzPaVNR23czHeCusgp3uBpWHJXtvYGpWYHta8COtYJJb/XBt/DSsstTuN4WVhxXLUN3v6zPsW1nynsk13PtweJm28qWiHpRb5Kaw8DXUrlVjrMittkVm7svoqGKRFlx04hWsbOGHNZF6EZclCsdfp89sic3HVeVJnqcB+zDGJ1XtgOQaB+8F7cXCcOkd9EQ++PwdXiz91t6BBQp67ekKSfH8OriZtnKy8DE8hP4Hn25+Rt7IEfxUurScc7Xv0+IdWLt+9TMo/xz3BnTwDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKPMXszcY2s66eZcAAAAASUVORK5CYII=',
    tags: ['TypeScript'],
    demoLink: '#',
    codeLink: '#'
  }
];

// Function to render projects
function renderProjects() {
  const projectsContainer = document.querySelector('.projects__grid');
  
  if (!projectsContainer) return;
  
  // Clear existing content
  projectsContainer.innerHTML = '';
  
  // Create project cards
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    
    const tagsHtml = project.tags.map(tag => 
      `<span class="project-card__tag">${tag}</span>`
    ).join('');
    
    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-card__image">
      <div class="project-card__content">
        <h3 class="project-card__title">${project.title}</h3>
        <div class="project-card__tags">
          ${tagsHtml}
        </div>
        <p class="project-card__description">${project.description}</p>
        <div class="project-card__links">
          <a href="${project.demoLink}" class="project-card__link" target="_blank">Live Demo</a>
          <a href="${project.codeLink}" class="project-card__link" target="_blank">View Code</a>
        </div>
      </div>
    `;
    
    projectsContainer.appendChild(projectCard);
  });
}

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects);