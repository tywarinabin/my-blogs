// Blog data stored in JavaScript
const blogData = [
    {
        id: 1,
        title: "Exploring the Hidden Temples of Kathmandu Valley",
        excerpt: "A journey through the lesser-known spiritual sites that hold centuries of history and culture.",
        image: "https://images.unsplash.com/photo-1547996167-8d47df8e304c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        date: "June 15, 2023",
        author: "Anita Sharma",
        readTime: "5 min read",
        category: "Culture",
        featured: true
    },
    {
        id: 2,
        title: "Trekking the Annapurna Circuit: A Complete Guide",
        excerpt: "Everything you need to know before embarking on one of the world's most famous treks.",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        date: "June 10, 2023",
        author: "Rajiv Thapa",
        readTime: "8 min read",
        category: "Adventure",
        featured: true
    },
    {
        id: 3,
        title: "The Art of Making Momos: A Nepali Culinary Tradition",
        excerpt: "Learn the secrets behind Nepal's favorite dumplings and their cultural significance.",
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        date: "June 5, 2023",
        author: "Sita Gurung",
        readTime: "6 min read",
        category: "Food",
        featured: true
    },
    {
        id: 4,
        title: "Living in Pokhara: The City of Lakes and Mountains",
        excerpt: "What it's like to call one of Nepal's most beautiful cities home.",
        image: "https://images.unsplash.com/photo-1624797492863-45f18bd9376f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        date: "May 28, 2023",
        author: "Bikash Rai",
        readTime: "7 min read",
        category: "Lifestyle",
        featured: false
    },
    {
        id: 5,
        title: "Festivals of Nepal: Colors, Faith and Celebration",
        excerpt: "A look at the vibrant festivals that define Nepali culture throughout the year.",
        image: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
        date: "May 22, 2023",
        author: "Priya Karki",
        readTime: "4 min read",
        category: "Culture",
        featured: false
    },
    {
        id: 6,
        title: "Wildlife Safari in Chitwan National Park",
        excerpt: "Spotting rhinos, tigers and exotic birds in Nepal's premier wildlife destination.",
        image: "https://images.unsplash.com/photo-1598894595350-70d01baccabd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        date: "May 15, 2023",
        author: "Nabin Chaudhary",
        readTime: "9 min read",
        category: "Adventure",
        featured: false
    },
    {
        id: 7,
        title: "The Newari Cuisine: A Food Lover's Guide to Kathmandu",
        excerpt: "Exploring the rich flavors and traditions of Kathmandu's indigenous Newari community.",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1071&q=80",
        date: "May 10, 2023",
        author: "Ramesh Maharjan",
        readTime: "5 min read",
        category: "Food",
        featured: false
    },
    {
        id: 8,
        title: "Sustainable Tourism in Nepal: How to Travel Responsibly",
        excerpt: "Tips for minimizing your environmental impact while exploring Nepal's natural beauty.",
        image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        date: "May 5, 2023",
        author: "Sunita Basnet",
        readTime: "6 min read",
        category: "Travel",
        featured: false
    }
];

// Function to render featured blog posts
function renderFeaturedPosts() {
    const featuredContainer = document.getElementById('featuredContainer');
    const featuredPosts = blogData.filter(blog => blog.featured);
    
    featuredPosts.forEach(blog => {
        const featuredCard = document.createElement('div');
        featuredCard.className = 'featured-card';
        
        featuredCard.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}" class="featured-image">
            <div class="featured-content">
                <h3 class="featured-title">${blog.title}</h3>
                <div class="featured-meta">
                    <span><i class="far fa-calendar"></i> ${blog.date}</span>
                    <span><i class="far fa-user"></i> ${blog.author}</span>
                    <span><i class="far fa-clock"></i> ${blog.readTime}</span>
                </div>
                <p class="featured-excerpt">${blog.excerpt}</p>
                <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        
        featuredContainer.appendChild(featuredCard);
    });
}

// Function to render regular blog posts
function renderBlogPosts() {
    const blogContainer = document.getElementById('blogContainer');
    const regularPosts = blogData.filter(blog => !blog.featured);
    
    regularPosts.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';
        
        blogCard.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}" class="blog-image">
            <div class="blog-content">
                <h3 class="blog-title">${blog.title}</h3>
                <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> ${blog.date}</span>
                    <span><i class="far fa-user"></i> ${blog.author}</span>
                    <span><i class="far fa-clock"></i> ${blog.readTime}</span>
                </div>
                <p class="blog-excerpt">${blog.excerpt}</p>
                <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        
        blogContainer.appendChild(blogCard);
    });
}

// Toggle mobile navigation
function setupMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    
    // Create mobile navigation content
    mobileNav.innerHTML = `
        <ul class="mobile-nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div class="mobile-auth-buttons">
            <button class="btn btn-outline">Sign In</button>
            <button class="btn btn-primary">Sign Up</button>
        </div>
    `;
    
    document.body.appendChild(mobileNav);
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
    });
    
    overlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    renderFeaturedPosts();
    renderBlogPosts();
    setupMobileNavigation();
});