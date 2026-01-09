import React, { useState } from 'react'
import RecentBlogCard from '../../components/RecentBlogCard'
import data from '../../data/blog.json'
import { IconButton, Stack, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

function TheImportanceofBranding() {


    const [likes, setLikes] = useState(45);
    const [dislikes, setDislikes] = useState(20);
    const [reaction, setReaction] = useState(null);

      const handleLike = () => {
    if (reaction === true) {
      setLikes(likes - 1);
      setReaction(null);
    } else {
      setLikes(likes + 1);
 
     if (reaction === false) setDislikes(dislikes - 1);
      setReaction(true);
    }
  };

  const handleDislike = () => {
    if (reaction === false) {
      setDislikes(dislikes - 1);
      setReaction(null);
    } else {
      setDislikes(dislikes + 1);
      if (reaction === true) setLikes(likes - 1);
      setReaction(false);
    }
  };
  


  return (
    <>
        <section>
            <div className='max-w-6xl mx-auto py-10 px-6'>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 lg:grid-cols-5 ">
                    <div className='lg:col-span-3'>
                    <h3 className='text-2xl md:text-4xl font-bold'>Hiring a Virtual Enabling Team: The Smart Way to Scale Without an Overhead</h3>
                    <p className='py-4'>Published: 25 Nov, 2025</p>
                    <Stack direction="row" spacing={1} alignItems="center" className='mb-5'>
                    <IconButton onClick={handleLike} color={reaction === true ? "primary" : "default"}>
                        <ThumbUpIcon />
                    </IconButton>
                    <Typography>{likes}</Typography>

                    <IconButton onClick={handleDislike} color={reaction === false ? "error" : "default"}>
                        <ThumbDownIcon />
                    </IconButton>
                    <Typography>{dislikes}</Typography>
                    </Stack>
                    <img src="/images/blog-2.jpg" alt="" className='rounded-xl'/>
                    <div className='mt-10'>
                        <p>In today’s rapidly evolving business environment, agility is the key. Organizations are under constant pressure to innovate quickly, enhance customer experiences, and achieve more with limited resources. However, assembling the right team to drive goals can be difficult, especially when facing constraints in budget, time, and access to skilled local talent.</p>
                        <p>That’s where a Virtual Enabling Team comes in.</p>
                    </div>
                    <div className='mt-10'>
                        <h4 className='text-xl font-semibold mb-5'>What is a Virtual Enabling Team?</h4>
                        <p>A Virtual Enabling Team is an extension of your in-house workforce — a dedicated group of skilled professionals working remotely to help you execute, scale, and innovate across critical business functions.</p>
                        
                        <p>From marketing and design to technology, operations, and customer experience, these teams integrate seamlessly into your organization to drive outcomes without the traditional overhead of hiring full-time, on-site employees.</p>
                    </div>
                    <div className='mt-10'>
                        <h4 className='text-xl font-semibold mb-5'>Why Businesses Are Shifting to Virtual Teams</h4>
                        <p>Hiring a virtual enabling team isn’t just a trend; it’s a strategic shift. Here’s why:</p>

                        <ol className='list-decimal ml-5 space-y-2'>
                            <li><strong>Access to Global Expertise</strong> <br /> You’re no longer limited by geography. Gain access to world-class specialists across marketing, technology, and operations who bring diverse experience and fresh thinking to your business.</li>
                            <li><strong>Faster Scalability</strong> <br /> Need to launch a campaign, develop a product, or expand support quickly? Virtual teams allow you to scale up or down effortlessly, matching resources to your growth stage.</li>
                            <li><strong>Cost Efficiency</strong> <br /> Skip the expenses tied to hiring, infrastructure, and employee benefits. Virtual teams operate on a flexible model, you pay for skills, not seats.</li>
                            <li><strong>Full-Time Focus, Zero Management Hassle</strong> <br /> With a managed virtual model, you get full-time professionals dedicated to your goals, while the recruiting, onboarding, HR, and compliance are handled for you.</li>
                            <li><strong>Seamless Integration with Your Culture and Processes</strong> <br /> Virtual doesn’t mean disconnected. With the right systems and onboarding, your enabling team functions like an in-house extension; aligned with your vision, values, and workflows.</li>
                        </ol>
                    
                    </div>
                    <div className='mt-10'>
                        <h4 className='text-xl font-semibold mb-5'>Who Can Benefit the Most</h4>
                        <ul>
                            <li><strong>Startups</strong> looking to scale without heavy investment</li>
                            <li><strong>Enterprises</strong> seeking specialized talent for specific projects</li>
                            <li><strong>Agencies</strong> needing flexible creative or tech capacity</li>
                            <li><strong>CX and Support teams</strong> expanding into new time zones</li>
                        </ul>
                    </div>
                    <div className='mt-10'>
                        <h4 className='text-xl font-semibold mb-5'>Key Roles a Virtual Enabling Team Can Cover</h4>
                        <ul className='list-disc ml-5 space-y-2'>
                            <li>Customer Support Services</li>
                            <li>Marketing Specialists (SEO, Paid Media, Content)</li>
                            <li>Designers & UX/UI Experts</li>
                            <li>Web & App Developers (Front-end, Full-stack, AI/ML)</li>
                            <li>Project Managers & Analysts</li>
                            <li>Contact Centre & Support Teams</li>
                            <li>HR, Finance, and Back-office Operations</li>
                        </ul>
                    </div>
                    <div className="mt-10">
                        <h4 className='text-xl font-semibold mb-5'>Getting Started Is Simple</h4>
                        <ul className='list-disc ml-5 space-y-2'>
                            <li><strong>Identify your growth enablers:</strong> Which functions, if strengthened, could accelerate your business?</li>
                            <li><strong>Define success metrics:</strong> What outcomes will prove this model works?</li>
                            <li><strong>Choose the right partner:</strong> Look for a provider that aligns with your culture, offers transparent management, and provides a 100% match guarantee.</li>
                            <li><strong>Onboard collaboratively:</strong> Treat your virtual team as a true partner, not an outsourced vendor.</li>
                        </ul>
                    </div>
                    <div className="mt-10">
                        <p>Hiring a virtual enabling team isn’t about outsourcing; it’s about partnering for progress. With the right strategy and support, you can unlock specialized global talent, drive faster innovation, and focus on what matters most; growth.</p>
                    </div>
                    </div>
                    <div className='lg:col-span-2'>
                        <div className='bg-gray-50 rounded-xl p-5'>
                            <h4>Recent Blogs</h4>
                            <div className='mt-5'>
                                {
                                    data.map((blog, index) => (
                                    <RecentBlogCard 
                                    key={index}
                                    title={blog.title}
                                    date={blog.date}
                                    link={blog.link}
                                    image={blog.image}
                                    />
                                    ))
                                }
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default TheImportanceofBranding