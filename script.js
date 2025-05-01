document.addEventListener("DOMContentLoaded", function () {
    const jobContainer = document.getElementById("job-container");
  
    const jobs = [
      {
        title: "🌟 প্রাথমিক বিদ্যালয় শিক্ষক নিয়োগ ২০২৫",
        start: "১ মে ২০২৫",
        end: "৩১ মে ২০২৫",
        posts: "২৬,০০০+",
        link: "#"
      },
      {
        title: "💼 বাংলাদেশ ব্যাংকে অফিসার পদে নিয়োগ",
        start: "২০ এপ্রিল ২০২৫",
        end: "২০ মে ২০২৫",
        posts: "৫৫০",
        link: "#"
      },
      {
        title: "🛡️ বাংলাদেশ পুলিশ কনস্টেবল নিয়োগ",
        start: "১০ এপ্রিল ২০২৫",
        end: "৫ মে ২০২৫",
        posts: "৩২০০",
        link: "#"
      }
    ];
  
    jobs.forEach(job => {
      const div = document.createElement("div");
      div.className = "job-post";
      div.innerHTML = `
        <h3>${job.title}</h3>
        <p>আবেদন শুরুর তারিখ: ${job.start} | শেষ তারিখ: ${job.end}</p>
        <p><strong>পদ সংখ্যা:</strong> ${job.posts}</p>
        <p><a href="${job.link}">বিস্তারিত দেখুন</a></p>
      `;
      jobContainer.appendChild(div);
    });
  });
  