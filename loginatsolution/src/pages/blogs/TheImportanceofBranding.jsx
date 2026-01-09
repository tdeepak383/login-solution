import React, { useState } from 'react'
import RecentBlogCard from '../../components/RecentBlogCard'
import data from '../../data/blog.json'
import { IconButton, Stack, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";


function TheImportanceofBranding() {


    const [likes, setLikes] = useState(63);
    const [dislikes, setDislikes] = useState(26);
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
                    <h3 className='text-2xl md:text-4xl font-bold'>The Importance of Branding</h3>
                    <p className='py-4'>Published: 07 Oct, 2025</p>
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
                    <img src="/images/branding.jpg" alt="" className='rounded-xl'/>
                    <div className='mt-10'>
                        <h4 className='text-xl font-semibold mb-5'>Building Recognition, Trust, and Loyalty:</h4>
                        <p>Branding is far more than just a logo or a catchy tagline: it is the very identity of a business and the foundation of its connection with customers. In fact, branding reflects a company's values, behaviour, quality, and purpose. A thoughtfully designed logo should resonate with the target audience from the very first glance and can even influence investor perceptions. Whether it's a growing startup or an established enterprise, effective branding plays a pivotal role in distinguishing your business from competitors and building long-term success.</p>
                    </div>
                    <div className='mt-10'>
                        <h4 className='text-xl font-semibold mb-5'>Creates Recognition and Differentiation</h4>
                        <p>Branding is the personality and visual identity of your company. In today's competitive marketplace, a strong brand sets you apart. Think of the most recognizable logos; these brands have built powerful identities that connect deeply with their audiences. Consistent use of colors, typography, and messaging across every platform boosts recognition. This approach makes it easier for customers to remember, trust, and engage with your business.</p>
                    </div>
                    <div className='mt-10'>
                        <h4 className='text-xl font-semibold mb-5'>Trust and Credibility</h4>
                        <p>A professional and cohesive brand builds trust with customers. People are more likely to do business with a company they recognize and perceive as trustworthy. By conveying a clear message and maintaining consistency in your branding, you show that you're reliable and serious about your business. A strong brand also reflects the quality of your products or services, and a good reputation can go a long way in building long-term customer relationships.</p>
                    </div>
                    <div className='mt-10'>
                        <h4 className='text-xl font-semibold mb-5'>Attain Customer Loyalty</h4>
                        <p>Branding goes beyond the transactional relationship between a business and its customers. A well-developed brand connects emotionally with its audience, encouraging customer loyalty. When people feel aligned with your brand's values and experience a consistent, positive interaction with your business, they are more likely to return and recommend your products or services to others. Loyal customers are often your best brand advocates.</p>
                    </div>
                    <div className='mt-10'>
                        <h4 className='text-xl font-semibold mb-5'>Marketing and Communication Strategies</h4>
                        <p>Your brand is a roadmap for all of your marketing and communication efforts. It informs your tone of voice, the type of content you create, and the way you interact with customers. A strong brand message helps maintain consistency across various marketing channels, from social media to advertising campaigns. By having a clear brand identity, your marketing becomes more targeted and effective, ensuring that your message resonates with your audience.</p>
                    </div>
                    <div className='mt-10'>
                        <h4 className='text-xl font-semibold mb-5'>Increases Business Value</h4>
                        <p>A well-established brand adds value to your business. Strong branding can make your business more appealing to investors, potential partners, and even customers. It's not just about having a recognizable logo; it's about building a reputation that translates into financial value. Companies with strong brands are often able to charge premium prices for their products or services because customers associate them with quality, reliability, and trust.</p>
                    </div>
                    <div className='mt-10'>
                        <h4 className='text-xl font-semibold mb-5'>Conclusion</h4>
                        <p>Branding is a critical asset that impacts every aspect of your business, from how you market your products to the way customers perceive and engage with your company. By developing a solid brand identity, you can foster recognition, trust, and loyalty, all of which contribute to long-term business growth. In today's competitive market, a strong brand is not just an option; it's a necessity.</p>
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