import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import ArticleContent from './article-content'

// Central blog data (should mirror the list pages)
const blogPosts = [
  {
    id: 1,
    title: '25 Years of Impact Through Innovation - UCT 2025',
    excerpt: 'For a quarter of a century, the University of Cape Town\'s Research Contracts & Innovation (RC&I) office has been driving transformation through ideas that change lives. The Innovation at UCT 2025 brochure celebrates 25 years of breakthrough research, from pioneering sustainable fuels and medical technologies to animal health innovations and a growing portfolio of 40+ spin-off companies valued at over R250 million.',
    content: `
      <h2>A Quarter Century of Innovation Excellence</h2>
      <p>For a quarter of a century, the University of Cape Town's Research Contracts & Innovation (RC&I) office has been driving transformation through ideas that change lives. The <em>Innovation at UCT 2025</em> brochure celebrates 25 years of breakthrough research, from pioneering sustainable fuels and medical technologies to animal health innovations and a growing portfolio of 40+ spin-off companies valued at over R250 million.</p>

      <h2>From Research to Real-World Impact</h2>
      <p>UCT's innovation journey showcases how academic excellence translates into tangible solutions for Africa and beyond. The university has built a reputation for:</p>
      <ul>
        <li>Pioneering sustainable fuels and clean energy technologies</li>
        <li>Developing cutting-edge medical technologies and healthcare solutions</li>
        <li>Creating innovative animal health and veterinary solutions</li>
        <li>Building award-winning MedTech solutions that redefine healthcare access</li>
        <li>Fostering greener energy and biotech excellence across the continent</li>
      </ul>

      <h2>Building Africa's Innovation Future</h2>
      <p>The Innovation at UCT 2025 brochure highlights the people, partnerships, and progress shaping the future of African innovation. From greener energy solutions to biotech excellence, UCT continues to lead the way in turning research into real-world impact that benefits communities across Africa.</p>

      <h2>Access the Full Report</h2>
      <p>The complete Innovation at UCT 2025 brochure provides detailed insights into the university's innovation ecosystem, success stories, and future vision for African research and development.</p>

      <div style="margin: 2rem 0; text-align: center;">
        <a href="https://fcb03329-78eb-49c5-9fec-e0582ac7040c.usrfiles.com/ugd/fcb033_826b2f6174804cd5b44bb91f01bd30dc.pdf" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; background-color: #a4ba36; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; font-weight: 600; transition: background-color 0.2s;">
          <svg style="width: 1.25rem; height: 1.25rem; margin-right: 0.5rem;" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
          </svg>
          View UCT Innovation Brochure 2025
        </a>
      </div>

      <p><strong>Source:</strong> <a href="https://www.nipmo.org/post/25-years-of-impact-through-innovation-uct-2025" target="_blank" rel="noopener noreferrer">NIPMO Official Site</a></p>
    `,
    image: 'https://ext.same-assets.com/4026891959/3491800091.png',
    category: 'OTT Publications & Articles',
    author: 'Nipmo Kims',
    date: 'Jan 7, 2025',
    readTime: '1 min read',
    views: '1 view'
  },
  {
    id: 2,
    title: "Unlocking South Africa's Research Potential: Insights from the National Science Technology Forum",
    excerpt: 'At the recent National Science Technology Forum (NSTF) event, Ms. Jetane Charsley, Head of the National Intellectual Property Management Office (NIPMO), delivered a thought-provoking presentation on the "Innovation Ecosystem – Areas to Celebrate and to Improve On."',
    content: `
      <h2>NSTF Event Presentation</h2>
      <p>At the recent National Science Technology Forum (NSTF) event, Ms. Jetane Charsley, Head of the National Intellectual Property Management Office (NIPMO), delivered a thought-provoking presentation on the "Innovation Ecosystem – Areas to Celebrate and to Improve On."</p>

      <p>Drawing from her extensive career in intellectual property and her passion for translating research into real-world impact, Ms. Charsley highlighted the critical role of research in driving South Africa's socio-economic development. She underscored the progress made in increasing research output and expanding the academic workforce but also addressed persistent challenges that hinder the nation's full potential.</p>

      <h2>Nine Key Themes Explored</h2>
      <ol>
        <li>The challenges of securing sufficient research funding.</li>
        <li>Limited support from policymakers and governance issues.</li>
        <li>Inadequate research infrastructure and resources.</li>
        <li>Gaps in training and mentorship for emerging researchers.</li>
        <li>The need to align research with sustainable innovation goals.</li>
        <li>Career development for young minds in the research field.</li>
        <li>Addressing brain drain in critical research areas.</li>
        <li>The importance of collaboration and networking.</li>
        <li>Barriers to commercializing innovative research outcomes.</li>
      </ol>

      <h2>Building a Stronger Innovation Ecosystem</h2>
      <p>Ms. Charsley's insights emphasized the need for a collective effort between government, academia, and industry to strengthen South Africa's National System of Innovation (NSI). By addressing these challenges, she advocated for a supportive ecosystem that encourages groundbreaking research, fosters collaboration, and ensures impactful commercial outcomes from publicly funded R&D initiatives.</p>

      <p>This conversation is vital as South Africa seeks to enhance its global competitiveness and harness the power of innovation to solve pressing societal challenges.</p>
    `,
    image: 'https://ext.same-assets.com/379977813/2900954187.jpeg',
    videoUrl: 'https://www.youtube.com/watch?v=NJddU-lnmA4',
    category: 'DSTI/ NIPMO news',
    author: 'Ms. Jetane Charsley, Head of NIPMO',
    date: 'Dec 9, 2024',
    readTime: '2 min read',
    views: '20 views'
  },

  {
    id: 7,
    title: 'VUT strengthens global research ties with SUNY Polytechnical Institute',
    excerpt: 'VUT and SUNY Polytechnic Institute partnered to advance global research, academic exchange & innovation, supporting VUT\'s internationalisation goals under Strategy 2033+.',
    content: `
      <h2>Strategic Collaboration for Global Research</h2>
      <p><strong>VUT and SUNY Polytechnic Institute partnered to advance global research, academic exchange & innovation, supporting VUT's internationalisation goals under Strategy 2033+.</strong></p>

      <p><em>07 October 2025 | Story By: Staff Reporter | Picture: Supplied</em></p>

      <p>The Vaal University of Technology (VUT) has taken another decisive step towards expanding its global research network through a strategic collaboration with the State University of New York (SUNY) Polytechnic Institute. The engagement forms part of VUT's ongoing efforts to advance international partnerships, academic exchange, and collaborative innovation under the pillars of Strategy 2033+.</p>

      <h2>High-Level Meeting Establishes Research Pathways</h2>
      <p>On 30 September 2025, Dr Speech Nelana, Deputy Vice-Chancellor: Research, Innovation, Commercialisation and Internationalisation and Mr Prajesh Bhikha, Acting Manager: Internationalisation, represented the university in a high-level meeting with Dr Wole Soboyejo, President of SUNY Polytechnic Institute and Chair of the African Renaissance Institute for Science & Technology (ARIST), in Sandton. The meeting focused on developing structured pathways for research collaboration, academic mobility, and capacity building.</p>

      <h2>Areas of Collaboration</h2>
      <p>The deliberations explored opportunities for joint research initiatives, educational exchange programmes, and international funding partnerships. Both institutions expressed commitment to strengthening cooperation in areas aligned with:</p>
      <ul>
        <li>Sustainable development</li>
        <li>Technological advancement</li>
        <li>Global innovation</li>
      </ul>

      <h2>Building a Globally Engaged Institution</h2>
      <p>This collaboration underscores VUT's dedication to positioning itself as a globally engaged institution. By deepening ties with international partners such as SUNY Polytechnic Institute, VUT continues to build an ecosystem that supports transformative research, academic excellence, and meaningful contributions to global knowledge creation.</p>

      <p><strong>Read the full story:</strong> <a href="https://vut.ac.za/vut-strengthens-global-research-ties-with-suny-polytechnic/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">VUT strengthens global research ties with SUNY Polytechnic</a></p>
    `,
    image: 'https://ext.same-assets.com/4026891959/214358251.webp',
    category: 'In the media',
    author: 'Nipmo Kims',
    date: 'Jan 6, 2025',
    readTime: '1 min read',
    views: '4 views',
    slug: 'vut-strengthens-global-research-ties'
  },
  {
    id: 8,
    title: 'Groundbreaking milestone as Unisa exceeds 100 patents granted',
    excerpt: 'Unisa celebrates a remarkable milestone, with over a hundred patents granted for inventions that stem from its ongoing research and development efforts. Since the launch of the Directorate of Innovation, Technology Transfer and Commercialisation (DITTC) in 2012, the university has worked closely with both staff and students to transform fresh ideas into protected technologies.',
    content: `
      <h2>A Remarkable Milestone in Innovation</h2>
      <p><strong>Unisa celebrates a remarkable milestone, with over a hundred patents granted for inventions that stem from its ongoing research and development efforts.</strong> Since the launch of the Directorate of Innovation, Technology Transfer and Commercialisation (DITTC) in 2012, the university has worked closely with both staff and students to transform fresh ideas into protected technologies.</p>

      <div style="text-align: center; margin: 2rem 0;">
        <img src="https://ext.same-assets.com/4026891959/1160493728.jpeg" alt="Patent Certificate" style="max-width: 100%; height: auto; border-radius: 8px;" />
      </div>

      <h2>Breakthrough Technology: Nanofluids by Radiolysis</h2>
      <p>Among the patents granted, Unisa achieved this milestone: <strong>"Production of Nanofluids by Radiolysis"</strong>, which was granted in South Africa on 22 December 2023. This technology, developed by Prof Maalik Maaza and Dr Touria Khamliche, provides an innovative method and system for manufacturing nanofluids that ensures stable, large-scale production of nano-particle-enhanced liquids with superior heat transfer and performance properties. This breakthrough paves the way for innovations in cooling systems, energy, automotive, and biomedical applications.</p>

      <h2>DITTC's Tremendous Progress</h2>
      <p>The DITTC has made tremendous progress in the promotion and support of innovative solutions and inventions from Unisa's research and development activities. The directorate was established in 2012 in response to the promulgation of the Intellectual Property (IP) from Publicly Financed Research and Development Act 51 of 2008. The DITTC also supports the progressive realisation of the university by ensuring that the excellent work done by Unisa staff and students finds expression in society.</p>

      <h2>Patent Application Growth</h2>
      <p>Following the first invention disclosure in 2012, which led to the institution's first patent application, Unisa has filed an average of 21 patent applications per year. As at the end of 2024, the DITTC processed 251 IP disclosures and filed 251 patent applications in different jurisdictions across the world. This has led to the protection of more than 50 technologies from Unisa's research and development initiatives. Handling innovative solutions from high-tech areas to translation and learning-related technical solutions, the DITTC continues to attract researchers from all colleges at Unisa.</p>

      <div style="text-align: center; margin: 2rem 0;">
        <img src="https://ext.same-assets.com/4026891959/2255414952.jpeg" alt="Patent Applications vs IP Disclosures Chart" style="max-width: 100%; height: auto; border-radius: 8px;" />
      </div>

      <h2>100 Patents Granted Milestone</h2>
      <p>In 2023, Unisa reached another milestone: 100 patents were granted. From the very first patent to be granted in the name of Unisa in 2015, to a record-breaking 100 patents granted in 2023, the patent portfolio currently stands at 132 patents, filed in South Africa and other parts of the world.</p>

      <div style="text-align: center; margin: 2rem 0;">
        <img src="https://ext.same-assets.com/4026891959/3224585844.jpeg" alt="Granted Patents Chart" style="max-width: 100%; height: auto; border-radius: 8px;" />
      </div>

      <h2>Quality and International Protection</h2>
      <p>This growth in granted patents reflects the quality of Unisa's inventions and the internal assessment processes to ensure that those inventions with applications beyond South Africa are adequately protected. With the growth of the portfolio comes an increase in administrative requirements. Patent protection is territorial, and each application filed in each jurisdiction is treated as a separate application and dealt with in terms of the laws of that jurisdiction. Most Unisa patents are granted in examining jurisdictions where the merits of the applications are examined. The DITTC leads the process of navigating through the legal requirements in each jurisdiction, including responding to comments and objections from the various patent offices.</p>

      <h2>Ongoing Engagement</h2>
      <p>The DITTC continues its intensive engagement with researchers, distinguished professors, departments and postgraduate students to create awareness of the IP policy and the importance of protecting innovations emerging from Unisa's research and development activities.</p>

      <p><em>* By Ayanda Noma, Director: Innovation, Technology Transfer and Commercialisation</em></p>

      <p><strong>Publish date:</strong> 2025/10/06</p>

      <p><strong>Read the full story:</strong> <a href="https://www.unisa.ac.za/sites/corporate/default/Research-&-Innovation/News-&-events/Articles/Groundbreaking-milestone-as-Unisa-exceeds-100-patents-granted" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">UNISA Official News</a></p>
    `,
    image: 'https://ext.same-assets.com/4026891959/1991198915.png',
    category: 'OTT Publications & Articles',
    author: 'Nipmo Kims',
    date: 'Jan 6, 2025',
    readTime: '2 min read',
    views: '3 views',
    slug: 'unisa-exceeds-100-patents'
  },
  {
    id: 9,
    title: 'Can Rooibos extract help treat breast cancer?',
    excerpt: 'October is Breast Cancer Awareness Month, and there\'s some good news on the horizon in South Africa. Stellenbosch University\'s Dr Nicky Verhoog is leading a study to assess the impact of Rooibos extract in breast cancer treatment. Early results suggest Rooibos extract may limit estrogen\'s role in promoting breast cancer cell growth.',
    content: `
      <h2>Groundbreaking Research on Rooibos Extract</h2>
      <p><strong>October is Breast Cancer Awareness Month, and there's some good news on the horizon in South Africa.</strong> Stellenbosch University's Dr Nicky Verhoog is leading a study to assess the impact of Rooibos extract in breast cancer treatment. Early results suggest Rooibos extract may limit estrogen's role in promoting breast cancer cell growth.</p>

      <div style="text-align: center; margin: 2rem 0;">
        <img src="https://ext.same-assets.com/4026891959/375730654.jpeg" alt="Rooibos Tea" style="max-width: 100%; height: auto; border-radius: 8px;" />
        <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.5rem;">Image credit: <a href="https://unsplash.com/@teacora?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">TeaCora Rooibos</a> on <a href="https://unsplash.com/photos/clear-glass-bowl-with-brown-liquid-hWMT0snyxX4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">Unsplash</a></p>
      </div>

      <h2>Understanding the Research</h2>
      <p>In 2023, Harvard Medical School reported that estrogen stimulates breast tissue division and rapid multiplication, raising the risk of cancer-causing mutations.</p>

      <p>The <em>Knysna-Plett Herald</em> reports Rooibos extract showed reactions to estrogen similar to fulvestrant, a drug used to block estrogen in breast cancer treatment.</p>

      <p>The extract was found to slow down estrogen-induced cell growth and prevent the cells from spreading.</p>

      <blockquote style="border-left: 4px solid #a4ba36; padding-left: 1rem; margin: 1.5rem 0; font-style: italic;">
        "Our recent research has found that Rooibos extract may counter the effects of estrogen in breast cancer cells. Estrogen is known to fuel the growth of many breast cancers, making these early findings especially significant. In laboratory tests, we found that Rooibos slowed down the growth of estrogen-driven breast cancer cells and stopped them from spreading."
        <footer style="margin-top: 0.5rem; font-style: normal; font-weight: 600;">— Dr Nicky Verhoog, Stellenbosch University</footer>
      </blockquote>

      <h2>A Safe Complementary Approach</h2>
      <p>While these findings are encouraging, the researchers say they don't intend to find a cure, but rather to determine if rooibos is safe to use alongside well-established treatments.</p>

      <p>The next step is additional studies on animals, which are scheduled for 2026.</p>

      <p>Verhoog says that because the lab studies are focused on single cells, they can't replicate the complexity of the human body.</p>

      <blockquote style="border-left: 4px solid #a4ba36; padding-left: 1rem; margin: 1.5rem 0; font-style: italic;">
        "We need to see how Rooibos behaves when metabolised in the body."
      </blockquote>

      <h2>Support for the Research</h2>
      <p>Given the potential for a breakthrough in breast cancer treatment, the South African Rooibos Council (SARC) and the Department of Science and Innovation (DSI) Sector Innovation Fund Programme are supporting the research.</p>

      <p><strong>Date:</strong> 6 Oct 2025</p>

      <p><strong>Read the full story:</strong> <a href="https://www.bizcommunity.com/article/can-rooibos-extract-help-treat-breast-cancer-393658a" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">Bizcommunity Article</a></p>
    `,
    image: 'https://ext.same-assets.com/4026891959/375730654.jpeg',
    category: 'In the media',
    author: 'jetanecharsley',
    date: 'Oct 6, 2025',
    readTime: '2 min read',
    views: '4 views',
    slug: 'rooibos-extract-breast-cancer'
  },
  {
    id: 10,
    title: 'NIPMO honoured with award for its contribution to innovation management',
    excerpt: 'On 4 September 2025, the National Intellectual Property Management Office (NIPMO) received the Southern African Research and Innovation Management Association (SARIMA) Excellence in Organisational Contribution to Innovation Management Award for its role in strengthening South Africa\'s innovation ecosystem.',
    content: `
      <h2>Recognition for Excellence in Innovation Management</h2>
      <p>On 4 September 2025, the National Intellectual Property Management Office (NIPMO), a specialised service delivery unit of the Department of Science, Technology and Innovation, received the Southern African Research and Innovation Management Association (SARIMA) Excellence in Organisational Contribution to Innovation Management Award for its role in strengthening South Africa's innovation ecosystem.</p>

      <div style="text-align: center; margin: 2rem 0;">
        <img src="https://ext.same-assets.com/4026891959/1453098089.jpeg" alt="NIPMO Award Ceremony" style="max-width: 100%; height: auto; border-radius: 8px;" />
      </div>

      <h2>SARIMA Awards Ceremony</h2>
      <p>The SARIMA awards were presented at a special dinner held as part of the annual SARIMA Conference, which ran from 2 to 5 September in Stellenbosch. The awards recognise excellence in research and innovation management across the Southern African Development Community.</p>

      <p>Addressing the attendees, SARIMA President-Elect Dr Douglas Sanyahumbi said that the award to NIPMO celebrated national innovation enablement.</p>

      <blockquote style="border-left: 4px solid #a4ba36; padding-left: 1rem; margin: 1.5rem 0; font-style: italic;">
        "It recognises an organisation that serves as a true architect and catalyst for excellence across the national innovation management landscape, whose contributions are considered profound and far-reaching."
        <footer style="margin-top: 0.5rem; font-style: normal; font-weight: 600;">— Dr Douglas Sanyahumbi, SARIMA President-Elect</footer>
      </blockquote>

      <p>He added that NIPMO's work was foundational to the success of every technology transfer office (TTO) in South Africa. "Their impact is not measured in the performance of one institution or one TTO, but in the strength and capability of an entire national innovation system," he said.</p>

      <h2>The Role of Technology Transfer Offices</h2>
      <p>The TTOs function as intermediaries between academic research and the commercial market by managing and commercialising institutional intellectual property (IP). This includes protecting IP through patents and copyrights, licensing technology to existing companies, and assisting in the creation of new spinout companies.</p>

      <h2>NIPMO's Impact on South Africa's Innovation Ecosystem</h2>
      <p>As the national oversight body supporting 37 publicly funded research institutions, NIPMO provides critical financial and strategic support. This includes the allocation of funds to enable institutions to recruit essential technology transfer personnel, implement operational systems, and pursue IP commercialisation. NIPMO also reimburses institutions for eligible IP protection expenses.</p>

      <p>Beyond funding, NIPMO has made remarkable strides in capacity building. It has delivered specialised IP training to over 2,400 individuals from 51 countries and, in collaboration with World Intellectual Property Organization, established 27 technology and innovation support centres across the country, ensuring access to global patent information and innovation support services.</p>

      <div style="text-align: center; margin: 2rem 0;">
        <img src="https://ext.same-assets.com/4026891959/729731753.jpeg" alt="NIPMO Team" style="max-width: 100%; height: auto; border-radius: 8px;" />
      </div>

      <h2>Message from NIPMO Leadership</h2>
      <p>The Head of NIPMO, Ms Jetane Charsley, said that NIPMO and the DSTI were deeply honoured to receive the award.</p>

      <blockquote style="border-left: 4px solid #a4ba36; padding-left: 1rem; margin: 1.5rem 0; font-style: italic;">
        "This recognition affirms the collective efforts of our team and partners in building and strengthening a national innovation system that is inclusive and sustainable. We share this award with every TTO, researcher and stakeholder working tirelessly to translate ideas into impact for South Africa and beyond."
        <footer style="margin-top: 0.5rem; font-style: normal; font-weight: 600;">— Ms Jetane Charsley, Head of NIPMO</footer>
      </blockquote>

      <p><em>Issued by the Department of Science, Technology and Innovation.</em></p>

      <p><strong>For media enquiries:</strong> Ms Julian Leshilo-Sebake at 060 961 2194 or <a href="mailto:Julian.Leshilo@dsti.gov.za" style="color: #2563eb; text-decoration: underline;">Julian.Leshilo@dsti.gov.za</a></p>

      <p><strong>Source:</strong> <a href="https://www.dsti.gov.za/index.php/media-room/latest-news/4793-nipmo-honoured-with-award-for-its-contribution-to-innovation-management" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">DSTI Official News</a></p>
    `,
    image: 'https://ext.same-assets.com/4026891959/1453098089.jpeg',
    category: 'DSTI/ NIPMO news',
    author: 'Nipmo Kims',
    date: 'Sep 12, 2025',
    readTime: '2 min read',
    views: '4 views',
    slug: 'nipmo-sarima-award',
    featured: true
  },
  {
    id: 11,
    title: 'Briefing on the Intellectual Property from Publicly Financed Research and Development Act (IPR Act)',
    excerpt: 'The Committee was briefed by the Department of Science, Technology and Innovation and the National Intellectual Property Management Office (NIPMO) on the Intellectual Property from Publicly Financed Research and Development Act (IPR Act).',
    content: `
      <h2>Portfolio Committee Briefing Overview</h2>
      <p><strong>Science, Technology and Innovation</strong><br/>
      <strong>11 March 2025</strong><br/>
      <strong>Chairperson:</strong> Ms T Shiviti (ANC)</p>

      <h2>Meeting Summary</h2>
      <p>The Committee was briefed by the Department of Science, Technology and Innovation and the National Intellectual Property Management Office (NIPMO) on the Intellectual Property from Publicly Financed Research and Development Act (IPR Act).</p>

      <p>Dr Blade Nzimande, the Minister of Science, Technology and Innovation, said when the Department was first formed in 1994, one of its aims was to strengthen the country's innovation capabilities, identifying strategic weaknesses in the innovation system. An example of this could be research which hardly translated to commercialisation and intellectual property (IP). Most of the innovators consisted of the poor and working-class communities. To address the aforementioned weakness, several innovation-enabling legislative, institutional measures were in place. This included the creation of the Technology of the Innovation Agency which was for innovative IPs commercialisation from research products. The Intellectual Property from Publicly Funded Research and Development Act was passed in 2008.</p>

      <h2>Key Issues Discussed</h2>
      <p>The Committee wondered about an instance where someone acquired Intellectual Property (IP) and a large corporation challenged the originality of the IP. The Committee raised concerns about the theft of IP in the country by international companies. They asked about the beneficiaries of the NIPMO, specifically the small enterprises, and what impact the NIPMO made on local economic development. The Committee was alarmed at the allocations which were at only 3% of the budget to support millions, yet 78% was spent on salaries alone.</p>

      <h2>Minister's Opening Remarks</h2>
      <p>Dr Blade Nzimande, Minister of Science, Technology and Innovation, greeted everyone and said he would switch off his video due to having poor internet connection. He looked forward to the presentation and appreciated the support provided by the Committee on the latest Tourism Strategy.</p>

      <p>When the Department was first formed in 1994, one of its aims was to strengthen the country's innovation capabilities, identifying strategic weakness in the innovation system namely; the innovation 'chasm'. An example of this could be research which hardly translated to commercialisation and intellectual property (IP). Most of the innovators consisted of the poor and working-class communities.</p>

      <h2>Addressing the Innovation Chasm</h2>
      <p>To address the aforementioned weakness, several innovation-enabling legislative institutional measures were in place. This included:</p>
      <ul>
        <li>The creation of the Technology Innovation Agency for innovative IP commercialisation from research products</li>
        <li>The Intellectual Property from Publicly Funded Research and Development Act passed in 2008</li>
        <li>Establishment of NIPMO to ensure research funded by public funds was identified, protected and utilised for public benefit</li>
      </ul>

      <h2>Historical Context and Examples</h2>
      <p>The Minister recalled the discovery of insulin in 1928. The professor who founded the insulin was paid only $2. He wondered how many billions of Rand were generated from the pharmaceutical companies that used and sold insulin for the purpose of treating diabetes. He questioned whether the University of Toronto was still benefiting from this.</p>

      <h2>Intellectual Property Leakage</h2>
      <p>Another problem which the Department sought to address was the Intellectual Property leakage; this referred to unauthorised disclosure of an organisation which was appropriated by other organisations. This leakage occurred through many means: data breaches, poor security practices, and ethical actions of an employee working for the organisation by means of plagiarism.</p>

      <h3>South African Examples</h3>
      <ul>
        <li><strong>Optimal Energy Joule (2010):</strong> South Africa produced the first electric car in the world, called the Optimal Energy Joule, but this was lost due to lack of funding and weak management. The car won many international awards.</li>
        <li><strong>Rooibos Tea:</strong> An American company wanted to patent the Rooibos tea as an American product</li>
        <li><strong>Please Call Me:</strong> A former Vodacom employee who invented the 'please call me' initiative faced conflict</li>
      </ul>

      <p>The Minister emphasized that much of the IP was stolen from developing countries. South Africa was among the top five of the most biodiverse countries, and of the plant species in the country, only 5% were formally studied. The continent was equally biodiverse; many countries invested in the African continent and committed theft of intellectual property.</p>

      <h2>Innovation Fund and Support for SMMEs</h2>
      <p>The President mentioned the public funding for innovation in the State of the Nation (SONA) last month. The Innovation Fund was established in 2021. Its primary objective was to serve as a catalyst for the creation of the sustained growth of the high technology Small Micro and Medium Enterprises (SMMEs), and to focus on generating sustainable pipeline opportunities of viable high technology for the private sector.</p>

      <p>The Department provided financial support. There was a long-standing debate and discussion on the Bank of South Africa, which was not responding to such initiatives; there was no start-up funding facility, and commercial banks showed no interest in supporting the SMMEs. During the COVID-19 global pandemic, R200,000,000,000 was set aside to assist the SMMEs, and hardly any of that funding reached said enterprises.</p>

      <h2>The Importance of NIPMO</h2>
      <p>NIPMO was integral to unlocking innovation in the country, commercialising it, and supporting it as part of contributing to economic growth and development in the country, especially those in the poor and working-class sectors. The task of protecting IP was strenuous and NIPMO may be out of depth in this regard. The Department may need to enhance the NIPMO.</p>

      <p><strong>Source:</strong> <a href="https://pmg.org.za/committee-meeting/42893/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">Parliamentary Monitoring Group</a></p>
    `,
    image: 'https://ext.same-assets.com/4026891959/185253830.png',
    category: 'DSTI/ NIPMO news',
    author: 'Nipmo Kims',
    date: 'Mar 11, 2025',
    readTime: '16 min read',
    views: '3 views',
    slug: 'ipr-act-briefing'
  },
  {
    id: 12,
    title: 'Celebrating history of SADiLaR: A testament to heritage and innovation',
    excerpt: 'As South Africa closes heritage month, the South African Centre for Digital Language Resources (SADiLaR) proudly turns the spotlight inwards, celebrating its own heritage through its history book titled The Story of SADiLaR.',
    content: `
      <h2>Honoring Heritage Month with SADiLaR's Legacy</h2>
      <p><strong>As South Africa closes heritage month, the South African Centre for Digital Language Resources (SADiLaR) proudly turns the spotlight inwards, celebrating its own heritage through its history book titled <em>The Story of SADiLaR</em>.</strong></p>

      <p>By <a href="https://www.bizcommunity.com/Search/196/499/s-Lihle+Sosibo.html" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">Lihle Sosibo</a>, issued by <a href="https://www.bizcommunity.com/PressOffice/North-WestUniversityNWU" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">North-West University (NWU)</a></p>

      <p><strong>6 Oct 2025</strong></p>

      <div style="text-align: center; margin: 2rem 0;">
        <img src="https://ext.same-assets.com/4026891959/2152112421.jpeg" alt="SADiLaR Heritage" style="max-width: 100%; height: auto; border-radius: 8px;" />
      </div>

      <h2>More Than a Record of the Past</h2>
      <p>This publication is more than a record of the past — it is a reflection of SADiLaR's journey, milestones, and lasting impact since its inception in 2016. From advancing South Africa's official languages to pioneering digital innovation in humanities research, SADiLaR's story is one of growth, collaboration, and unwavering commitment to preserving and promoting linguistic diversity.</p>

      <h2>Alignment with National Priorities</h2>
      <p>The history book encapsulates how SADiLaR's vision aligns with national priorities, particularly the Decadal Plan for Science, Technology, and Innovation, which calls for the development and digitisation of all official languages. It stands as a testimony to SADiLaR's strategy of good governance, inclusivity, and contribution to building a digitally enabled multilingual future for South Africa.</p>

      <p>By documenting its legacy, SADiLaR not only honours the strides made but also inspires future generations to value and expand on this foundation. This heritage month, while we celebrate the richness of South Africa's collective heritage, we also celebrate SADiLaR's unique legacy in shaping the future of languages and digital scholarship.</p>

      <h2>About SADiLaR</h2>
      <p>SADiLaR is a national centre supported by the Department of Science, Technology and Innovation as part of the new South African Research Infrastructure Roadmap. The research infrastructure is an independent national centre hosted by the North-West University. Following a hub-and-spoke model, the hub of the infrastructure is hosted at this university, while multiple contributing nodes are spread across various institutions.</p>

      <p>SADiLaR has an enabling function, with a focus on all official languages of South Africa, supporting research and development in the domains of language technology and language-related studies in the Humanities and Social Sciences. The infrastructure supports the creation, management and distribution of digital language resources, as well as applicable software, which are freely available for research purposes through the <a href="http://repo.sadilar.org/handle/20.500.12185/7" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">Language Resource Catalogue</a>.</p>

      <p><strong>Read the full story:</strong> <a href="https://www.bizcommunity.com/article/celebrating-history-of-sadilar-a-testament-to-heritage-and-innovation-515810a" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">Bizcommunity Article</a></p>
    `,
    image: 'https://ext.same-assets.com/4026891959/2152112421.jpeg',
    category: 'In the media',
    author: 'jetanecharsley',
    date: 'Oct 6, 2025',
    readTime: '2 min read',
    views: '4 views',
    slug: 'sadilar-heritage-celebration'
  },
  {
    id: 13,
    title: 'Prof. Rangith Baby Kuriakose: CUT Builds Digital Twin of Smart Manufacturing Environment',
    excerpt: 'CUT continues to think beyond by advancing research in smart manufacturing. At the heart of this innovation is the full-scale water bottling plant, originally conceived in 2018 and now serving as a foundation for cutting-edge research and postgraduate training.',
    content: `
      <h2>Advancing Research in Smart Manufacturing</h2>
      <p>CUT continues to think beyond by advancing research in smart manufacturing. At the heart of this innovation is the full-scale water bottling plant, originally conceived in 2018 and now serving as a foundation for cutting-edge research and postgraduate training.</p>

      <div style="text-align: center; margin: 2rem 0;">
        <img src="https://ext.same-assets.com/4026891959/295356671.jpeg" alt="Team effort and collaboration" style="max-width: 100%; height: auto; border-radius: 8px;" />
        <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.5rem;"><em>Team effort and collaboration: Prof. Rangith Baby Kuriakose, Associate Professor, and Siphiwe Mkhwanazi, Lecturer Assistant and Research Scholar in the Department of Electrical, Electronic, and Computer Systems Engineering, have partnered with Opti-Num Solutions to pioneer a future where simulation, AI, and smart technologies drive innovation and deliver research-based solutions.</em></p>
      </div>

      <h2>Digital Twin Technology</h2>
      <p>Under the tutelage of Prof. Rangith Baby Kuriakose, Associate Professor at CUT, and his team, and in partnership with Opti-Num Solutions, the official vendor of MathWorks tools in Southern Africa, CUT has developed a digital twin of the plant. This live, virtual copy of the physical system, continuously updated by sensor data, creates a safe and extendable research environment where advanced control strategies can be explored. Students and researchers can now compare traditional PLC control, event-driven Stateflow logic, and AI-based reinforcement learning, all without disrupting real-world operations.</p>

      <blockquote style="border-left: 4px solid #a4ba36; padding-left: 1rem; margin: 1.5rem 0; font-style: italic;">
        "Digital twins are a powerful way to innovate while offering safe, cost-effective experimentation. It also enables industries to predict failures, optimize performance, and build smarter systems."
        <footer style="margin-top: 0.5rem; font-style: normal; font-weight: 600;">— Prof. Rangith Baby Kuriakose</footer>
      </blockquote>

      <h2>From Concept to Academic Resource</h2>
      <p>A project plan and a scaled-down 3D model of the water bottling plant were first developed, laying the foundation for future research. Building on this plan, a small-scale version of the plant was physically constructed as part of Prof. Kuriakose's Doctoral project.</p>

      <p>Since then, the platform has grown into a significant academic resource, with:</p>
      <ul>
        <li>Over 15 DHET accredited publications</li>
        <li>Five postgraduate students successfully completing their research</li>
        <li>Research topics including communication architectures, digital twin development, human-machine collaboration, Blockchain technology and 5G technology incorporation</li>
      </ul>

      <h2>Impact on Local Industry</h2>
      <p>Looking ahead, the solutions being developed are tailored for small and medium industries in Bloemfontein, Welkom, and across the Free State, empowering them to transition into Industry 4.0 and Industry 5.0 practices.</p>

      <p>Together with Opti-Num Solutions, Prof. Baby and his team are pioneering a future where simulation, AI, and smart technologies transform how we teach, test, and apply innovation — bridging the academia and industry gaps and reinforcing CUT's role as a hub for human-centred, research-driven solutions.</p>

      <p><strong>Uploaded:</strong> 01 October 2025</p>

      <p><strong>Read the full story:</strong> <a href="https://www.cut.ac.za/news/cut-builds-digital-twin-of-smart-manufacturing-environment" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">CUT Official News</a></p>
    `,
    image: 'https://ext.same-assets.com/4026891959/295356671.jpeg',
    category: 'In the media',
    author: 'jetanecharsley',
    date: 'Oct 1, 2025',
    readTime: '2 min read',
    views: '5 views',
    slug: 'cut-digital-twin-manufacturing'
  },

  {
    id: 15,
    title: 'TUT ignites creativity at World IP Day 2025 celebration',
    excerpt: 'The Tshwane University of Technology (TUT) sparked innovation and artistic passion during its celebration of World Intellectual Property (IP) Day 2025 on 29 May. Themed IP and Music: Feel the Beat of IP, the event highlighted the powerful role of intellectual property in nurturing creativity, especially within the music industry.',
    content: `
      <h2>World IP Day 2025 at TUT</h2>
      <p><strong>Published: 04 June 2025</strong><br/>
      <strong>by Phaphama Tshisikhawe</strong></p>

      <p>The Tshwane University of Technology (TUT) sparked innovation and artistic passion during its celebration of World Intellectual Property (IP) Day 2025 on 29 May. Themed <em>IP and Music: Feel the Beat of IP</em>, the event highlighted the powerful role of intellectual property in nurturing creativity, especially within the music industry.</p>

      <p>Organised by TUT's Technology Transfer Office, the event brought together students, artists, legal experts, and entrepreneurs to explore how IP supports innovation and drives economic growth. It served as a dynamic platform to raise awareness of the importance of protecting creative works so that artists can receive the recognition and financial rewards they deserve.</p>

      <h2>Opening Remarks</h2>
      <p>Dr Vathiswa Papu-Zamxaka, TUT's Deputy Vice-Chancellor for Research, Innovation and Engagement, opened the proceedings with an uplifting address.</p>

      <blockquote style="border-left: 4px solid #a4ba36; padding-left: 1rem; margin: 1.5rem 0; font-style: italic;">
        "By safeguarding creative work through robust IP frameworks, we empower artists and strengthen a thriving creative economy."
        <footer style="margin-top: 0.5rem; font-style: normal; font-weight: 600;">— Dr Vathiswa Papu-Zamxaka</footer>
      </blockquote>

      <div style="text-align: center; margin: 2rem 0;">
        <img src="https://ext.same-assets.com/4026891959/1365670431.jpeg" alt="Dr Vathiswa Papu-Zamxaka" style="max-width: 100%; height: auto; border-radius: 8px;" />
        <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.5rem;"><em>Dr Vathiswa Papu-Zamxaka, Deputy Vice-Chancellor for Research, Innovation and Engagement</em></p>
      </div>

      <p>She emphasised music's dual role as both a cultural treasure and economic force.</p>

      <h2>Expert Speakers</h2>
      <p>The programme featured an impressive line-up of speakers:</p>

      <h3>Stephen Hollis - Adams & Adams</h3>
      <div style="text-align: center; margin: 2rem 0;">
        <img src="https://ext.same-assets.com/4026891959/1411413674.jpeg" alt="Stephen Hollis" style="max-width: 100%; height: auto; border-radius: 8px;" />
        <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.5rem;"><em>Legal expert, Stephen Hollis from Adams & Adams</em></p>
      </div>

      <blockquote style="border-left: 4px solid #a4ba36; padding-left: 1rem; margin: 1.5rem 0; font-style: italic;">
        "Intellectual property is the backbone of creativity, providing legal clarity that protects and incentivises innovation."
        <footer style="margin-top: 0.5rem; font-style: normal; font-weight: 600;">— Stephen Hollis</footer>
      </blockquote>

      <h3>Rorisang Sechele - Vocalist and Songwriter</h3>
      <div style="text-align: center; margin: 2rem 0;">
        <img src="https://ext.same-assets.com/4026891959/2576232086.jpeg" alt="Rorisang Sechele" style="max-width: 100%; height: auto; border-radius: 8px;" />
        <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.5rem;"><em>Alumna, Rorisang Sechele, a vocalist and songwriter</em></p>
      </div>

      <blockquote style="border-left: 4px solid #a4ba36; padding-left: 1rem; margin: 1.5rem 0; font-style: italic;">
        "As an independent artist, understanding IP has been crucial to protecting my music and building my career."
        <footer style="margin-top: 0.5rem; font-style: normal; font-weight: 600;">— Rorisang Sechele</footer>
      </blockquote>

      <h3>Mandla Maseko Snr - SNRGROUP Founder</h3>
      <p>Entrepreneur Mandla Maseko Snr, founder of SNRGROUP, delivered a motivational message about how IP can fuel sustainable creative enterprises.</p>

      <blockquote style="border-left: 4px solid #a4ba36; padding-left: 1rem; margin: 1.5rem 0; font-style: italic;">
        "IP empowers the next generation of creators to turn their passion into sustainable businesses."
      </blockquote>

      <h2>Musical Performance</h2>
      <p>Adding an artistic flair to the day, Dr Rostislava Pashkevitch-Ngobeni, Head of the Department of Performing Arts and acclaimed jazz saxophonist, Prof Karendra Devroop, delivered a moving musical performance that captured the essence of the day's theme.</p>

      <h2>Interactive Workshops</h2>
      <p>The event also featured interactive workshops and discussions designed to engage students, staff and local entrepreneurs. These sessions focused on how IP rights can strengthen small and medium-sized enterprises (SMEs) and boost global competitiveness.</p>

      <div style="text-align: center; margin: 2rem 0;">
        <img src="https://ext.same-assets.com/4026891959/2502178717.jpeg" alt="TUT World IP Day audience" style="max-width: 100%; height: auto; border-radius: 8px;" />
        <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.5rem;"><em>Captivating the audience, TUT's World IP Day celebration with its blend of insight, inspiration and creativity, was a powerful reminder of how protecting ideas can shape a brighter, more innovative future.</em></p>
      </div>

      <h2>Global Recognition</h2>
      <p>TUT's celebration was part of the broader global recognition of World Intellectual Property Day, established in 2000 by the World Intellectual Property Organization (WIPO) to promote greater awareness of the role of IP in everyday life.</p>

      <p><strong>Source:</strong> <a href="https://www.tut.ac.za/latest-news/658-tut-ignites-creativity-at-world-ip-day-2025-celebration" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">TUT Official News</a></p>
    `,
    image: 'https://ext.same-assets.com/4026891959/1365670431.jpeg',
    category: 'In the media',
    author: 'Nipmo Kims',
    date: 'Jun 4, 2025',
    readTime: '2 min read',
    views: '2 views',
    slug: 'tut-world-ip-day-2025'
  },
  {
    id: 16,
    title: 'Understanding intellectual property can supercharge innovation',
    excerpt: 'Producing knowledge is a daily pursuit at universities — knowing how best to protect and draw value from it is crucial. The Wits Innovation Centre (WIC) and Wits Libraries recently provided helpful tips on how to do this.',
    content: `
      <h2>IP Knowledge at Universities</h2>
      <p><strong>9 May 2025 - Wits Innovation Centre</strong></p>

      <p>Producing knowledge is a daily pursuit at universities — knowing how best to protect and draw value from it is crucial.</p>

      <p>The <a href="https://www.wits.ac.za/innovation/wits-innovation-centre/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">Wits Innovation Centre</a> (WIC) and <a href="https://www.wits.ac.za/library/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">Wits Libraries</a> recently provided helpful tips on how to do this.</p>

      <div style="text-align: center; margin: 2rem 0;">
        <img src="https://ext.same-assets.com/4026891959/4268792712.jpeg" alt="Wits IP Event" style="max-width: 100%; height: auto; border-radius: 8px;" />
      </div>

      <h2>Celebrating World IP Days</h2>
      <p>The entities celebrated <a href="https://www.wipo.int/en/web/ipday" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">World Intellectual Property Day</a>, held on 26 April, and <a href="https://www.worldbookday.com/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">World Book and Copyright Day</a> (23 April) by bringing together experts to share how ordinary members of the Wits community should be thinking about these issues. Since World IP Day's theme of the year is "Feel the beat of IP", there was a particular focus on creative and musical creations.</p>

      <p><a href="https://www.wits.ac.za/innovation/wits-innovation-centre/our-people/letlotlo-phohole/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">Letlotlo Phohole</a>, the Director of the WIC, says copyright is not just about a current creation, but the knowledge systems and cultural progress linked to this.</p>

      <blockquote style="border-left: 4px solid #a4ba36; padding-left: 1rem; margin: 1.5rem 0; font-style: italic;">
        "Music and literature are not just products, but entities of history and of hope."
      </blockquote>

      <p><a href="https://www.wits.ac.za/about-wits/office-of-the-vice-chancellor/lynn-morris/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">Professor Lynn Morris</a>, the Deputy Vice-Chancellor of <a href="https://www.wits.ac.za/research/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">Research and Innovation</a> at Wits, emphasises that intellectual property is valuable property. She points out that at Wits, intellectual property support is provided by entities like the WIC and <a href="https://www.wits.ac.za/library/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">Wits Libraries</a>.</p>

      <h2>The Key Safeguards</h2>
      <p>As an introduction into understanding the options, Advocate Thato Moloto, who specialises in intellectual property and copyright, explains that if art is your child, intellectual property is how you raise it.</p>

      <p>Moloto broke down the three main types of intellectual property that can protect creations:</p>

      <h3>1. Trademarks</h3>
      <p>For names, logos, and shapes, registered with the <a href="https://www.cipc.co.za/?page_id=4118" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">Companies and Intellectual Property Commission (CIPC)</a> in South Africa.</p>

      <h3>2. Patents</h3>
      <p>The registration of new technical solutions to problems, also filed with the CIPC.</p>

      <h3>3. Copyright</h3>
      <p>Covers an original creation that exists in a practical way by giving the creator the rights to authorise who can reproduce, adapt, perform, distribute and sell the creation. It does not require registration, making it particularly tricky to regulate. Copyright, Moloto jokes, is like having a child without a birth certificate.</p>

      <p>This is critical to understand, not only because of the need to protect creations and possibly collect royalties, but also because of the sheer size of the industry. Moloto quotes statistics like the around 120,000 songs released daily on streaming platforms, and that the United Nations Educational, Scientific and Cultural Organization (UNESCO) estimates that around 2.2 million books are published yearly.</p>

      <h2>Protection Methods</h2>
      <p>There are some key identifiers or ways to protect copyright that are administered by various national and international bodies. For instance:</p>

      <ul>
        <li>Books have <a href="https://www.nlsa.ac.za/isbn/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">ISBN</a> numbers issued by national libraries</li>
        <li><a href="https://www.doi.org/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">DOI</a> numbers are for academic texts and the like</li>
        <li><a href="https://www.iswc.org/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">ISWC</a> numbers are for musical compositions</li>
      </ul>

      <p>Other ways to protect various forms of work and to track where it has been used include:</p>

      <ul>
        <li><a href="https://support.google.com/youtube/answer/2797370?hl=en" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">YouTube content ID</a></li>
        <li>Blockchain immutable ownership records (eg. <a href="https://audius.co/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">Audius</a>, <a href="https://verisart.com/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">Verisart</a>)</li>
        <li>Collective Management Organisation partnerships like <a href="https://www.samro.org.za/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">SAMRO</a>, <a href="https://dalro.co.za/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">DALRO</a>, and <a href="https://www.capasso.co.za/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">CAPASSO</a></li>
        <li>Using trademarks for stage names, etc</li>
        <li>Using take-down measures on websites</li>
        <li>Notices to opt in or opt out of AI training</li>
      </ul>

      <h2>IP in an AI World</h2>
      <p>An understanding of intellectual property is crucial, particularly in the rapidly changing climate thanks to the rise of generative artificial intelligence (AI). Rachel Sikwane, a commercial lawyer focusing on academic publishing at <a href="https://rnmsinc.com/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">RNMS</a>, explains that institutions and creators are still learning how to respond.</p>

      <blockquote style="border-left: 4px solid #a4ba36; padding-left: 1rem; margin: 1.5rem 0; font-style: italic;">
        "As a result of AI and platforms like ChatGPT, a lot of the fundamental IP principles have been challenged and tested."
      </blockquote>

      <p>This includes who counts as the author or inventor of material generated or developed with the help of such tools. Another issue is whether copyrighted materials that have been used to train AI have been done so with permission and compensation. This also brings up whether there is a need for updated guidelines on AI generated content in being used in the academic sphere.</p>

      <p>Sikwane says that one way to approach this is that large academic publishers like Oxford University Press, Taylor & Francis Group, and Wiley Publishers have stepped into large financial licensing deals with AI companies. Also, legal actions in countries like the US, France, and Ireland, are pushing for clarity on these issues.</p>

      <h2>Finding a Way Through the Complexity</h2>
      <p>As numerous as the challenges around intellectual property currently are, this has long been an area of contention and tensions. Lazarus Matizirofa, the Associate Director of Research, Scholarly Communication, Digital Services & Systems at Wits Libraries, points to a number of famous songs that have faced copyright <a href="https://en.wikipedia.org/wiki/Waka_Waka_(This_Time_for_Africa)" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">controversy</a>, such as Shakira's <em>Waka Waka (This Time for Africa)</em>.</p>

      <p>Thankfully, there are various services available to the Wits community when considering possible intellectual property. Matizirofa says Wits Libraries offer various <a href="https://libguides.wits.ac.za/Copyright_and_Related_Issues" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">copyright services</a> and consult around using copyright materials. This extends not only to individuals, but Faculties themselves, for instance, around course materials.</p>

      <p>Matizirofa also warns that researchers should be aware of copyright policies that may be linked to their research grants. Wits Libraries can assist with understanding and fulfilling this. He also advises that there are various AI tools available that may be particularly reliable to use in the University setting, such as <a href="https://www.wits.ac.za/library/scopus-ai/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">SCOPUS</a>.</p>

      <p>For patents and other intellectual property concerns around innovation and possible commercialisation, the <a href="https://www.wits.ac.za/innovation/wits-innovation-centre/innovation-support/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">WIC's Innovation Support</a> office is the recommended point of contact.</p>

      <blockquote style="border-left: 4px solid #a4ba36; padding-left: 1rem; margin: 1.5rem 0; font-style: italic;">
        "Our job as a university is obviously to encourage creativity, but it is to safeguard it, so that our ideas, inventions, and music aren't stolen or disappear, but that they thrive and will benefit the people that created them."
        <footer style="margin-top: 0.5rem; font-style: normal; font-weight: 600;">— Professor Lynn Morris</footer>
      </blockquote>

      <p><strong>Source:</strong> <a href="https://www.wits.ac.za/news/latest-news/research-news/2025/2025-05/understanding-intellectual-property-can-supercharge-innovation.html" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">Wits Official News</a></p>
    `,
    image: 'https://ext.same-assets.com/4026891959/4268792712.jpeg',
    category: 'In the media',
    author: 'Nipmo Kims',
    date: 'May 9, 2025',
    readTime: '4 min read',
    views: '2 views',
    slug: 'wits-ip-innovation'
  },
  {
    id: 17,
    title: 'DUT celebrates World Intellectual Property Day',
    excerpt: 'The Durban University of Technology (DUT), in collaboration with key stakeholders, proudly co-hosted the highly anticipated World Intellectual Property (IP) Day 2025 celebration in KwaZulu-Natal, centred on the theme Intellectual Property and Music: Feel the Beat of IP.',
    content: `
      <h2>World IP Day 2025 in KwaZulu-Natal</h2>
      <div style="text-align: center; margin: 2rem 0;">
        <img src="https://ext.same-assets.com/4026891959/13847285.jpeg" alt="DUT World IP Day" style="max-width: 100%; height: auto; border-radius: 8px;" />
      </div>

      <p>The Durban University of Technology (DUT), in collaboration with key stakeholders, proudly co-hosted the highly anticipated World Intellectual Property (IP) Day 2025 celebration in KwaZulu-Natal.</p>

      <p>Centred on the theme <strong>"Intellectual Property and Music: Feel the Beat of IP"</strong> – the event explored the powerful intersection between IP and the music industry, highlighting how IP rights protect artistic creations, empower musicians and drive both cultural and economic growth.</p>

      <h2>Key Stakeholders</h2>
      <p>Some of the sterling stakeholders who formed part of the prestigious events were:</p>
      <ul>
        <li>Mangosuthu University of Technology (MUT)</li>
        <li>National Intellectual Property Management Office (NIPMO)</li>
        <li>Company and Intellectual Property Commission (CIPC)</li>
        <li>Technology Innovation Agency (TIA)</li>
        <li>Durban Film Office (DFO)</li>
        <li>Small Enterprise Development and Finance Agency (SEDA)</li>
        <li>University of Zululand</li>
        <li>University of KwaZulu-Natal</li>
        <li>High school learners in Umlazi</li>
        <li>Several musicians and artists from the South African entertainment industry</li>
      </ul>

      <h2>Series of Events</h2>
      <p>The series of three events were earmarked to raise awareness of the importance of intellectual property (IP) rights, particularly in fostering creativity and innovation within the music industry.</p>

      <h3>Event 1: Media Launch (16 April 2025)</h3>
      <p>The first event entailed a media launch at the Mangosuthu University of Technology on 16 April 2025. This event introduced this year's World IP Day theme and outlined the key activities planned for the celebration in collaboration with all the key stakeholders.</p>

      <h3>Event 2: Roadshow at Durban Botanic Gardens (24 April 2025)</h3>
      <p>On 24 April 2025, a roadshow was held at the Durban Botanic Gardens which aimed at educating the communities at large about the importance of intellectual property and its role in fostering innovation and creativity, empowering a new generation of innovators and creatives.</p>

      <p>The event was attended by Mr Timothy Magampa, General Manager of Legal and Licensing at Independent Music Performance Rights Association (IMPRA). He delivered a dynamic presentation on the registering of artistic work and the protection of intellectual property. Mr Thando Nyameni, Managing Director of KUMISA, shared his insights on leveraging intellectual property to build successful careers and businesses in the creative industry.</p>

      <p>Dr Thobile Sifunda, Head of Department for Sport, Arts and Culture, welcomed all attendees at the roadshow and highlighted key points for artists to consider which are ownership, control, and management; understanding the value chain; and embracing partnerships. She noted that the department has various programmes in place, including schools.</p>

      <p>She also emphasised the importance of supporting local talent brands, recognising the value they each bring to the cultural and economic landscape.</p>

      <div style="text-align: center; margin: 2rem 0;">
        <img src="https://ext.same-assets.com/4026891959/1258982366.jpeg" alt="DUT TTI team" style="max-width: 100%; height: auto; border-radius: 8px;" />
        <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.5rem;"><em>Pictured: DUT's Technology Transfer and Innovation (TTI) team, Nonkululeko Khuzwayo, Thandokuhle Luthuli, Daniel Vilakazi and Ms Nomnikelo Lundall.</em></p>
      </div>

      <p>Day two round off with the multi-talented artist from Ulundi, Ntuthuko Ndebele, known as Mthuthu. He shared on his musical journey and offered advice on navigating the challenges of the music industry. Having encountered numerous challenges himself, Ndebele's insights provided a realistic perspective on what upcoming artists may face, making his words a crucial takeaway for those looking to break into the industry.</p>

      <h3>Event 3: Interactive Workshop at MUT (25 April 2025)</h3>
      <p>The final day of the celebration of the World Intellectual Property (IP) Day 2025 took place at the Mangosuthu University of Technology on 25 April 2025. The day culminated into an interactive workshop which focused on the various practical aspects of intellectual property, with a vast emphasis on the comprehensive understanding of IPs in the music industry, highlighting the contribution of various stakeholders such as SAMRO, NIPMO, LASA and CIPC.</p>

      <p>A dynamic talk on the rights of artists was given by Ms Lerato Moloi, Founder and CEO of Lawyers for the Arts South Africa (LASA), who gave insight into the challenges faced by independent artists when dealing with record labels and also brought to the fore some of her experiences and lessons learned at the World Intellectual Property Day Celebration 2025.</p>

      <blockquote style="border-left: 4px solid #a4ba36; padding-left: 1rem; margin: 1.5rem 0; font-style: italic;">
        "My goal is to create a fair, inclusive and legally empowered creative industry in South Africa; and to establish long-term legal support, education, and policy advocacy for artists across disciplines."
        <footer style="margin-top: 0.5rem; font-style: normal; font-weight: 600;">— Ms Lerato Moloi, LASA Founder & CEO</footer>
      </blockquote>

      <h2>Highlight: Andile Yenana's Address</h2>
      <p>The highlight of the day entailed a direct interaction with professionals in the field such as the acclaimed South African jazz pianist and cultural ambassador, Mr Andile Yenana, who spoke about his creative works, particularly musicians in his era where intellectual property was not given much priority by the musicians and artists, but he encourages future artists and musicians to become part of the national intellectual property organisations which now exist such as CIPC and LASO which are instrumental in helping to protect the creations of musicians and artists and in providing a supporting role to the future of the music industry and its creative professionals.</p>

      <h2>Conclusion</h2>
      <p>All in all, the day concluded with much knowledge-sharing of resources and expertise, where music was the key focus in terms of intellectual property where creators were given priority to be given recognition to provide them with essential skills in intellectual property (IP).</p>

      <p><strong>Photography:</strong> Sbonelo Dlamini<br/>
      <strong>Writers:</strong> Phiwayinkosi Sibiya/Waheeda Peters</p>

      <p><strong>Source:</strong> <a href="https://www.dut.ac.za/dut-celebrates-world-intellectual-property-day/" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">DUT Official News</a></p>
    `,
    image: 'https://ext.same-assets.com/4026891959/13847285.jpeg',
    category: 'In the media',
    author: 'Nipmo Kims',
    date: 'May 2, 2025',
    readTime: '3 min read',
    views: '3 views',
    slug: 'dut-world-ip-day'
  },
  {
    id: 18,
    title: 'National Intellectual Property Management Office',
    excerpt: 'National Intellectual Property Management Office (NIPMO) is the implementing office of the Intellectual Property Rights from Publicly Financed Research & Development Act (IPR Act) in South Africa.',
    content: `
      <h2>About NIPMO</h2>
      <p><strong>National Intellectual Property Management Office (NIPMO) is the implementing office of the Intellectual Property Rights from Publicly Financed Research & Development Act (IPR Act) in South Africa.</strong></p>

      <div style="text-align: center; margin: 2rem 0;">
        <img src="https://ext.same-assets.com/4026891959/525007237.jpeg" alt="NIPMO Overview" style="max-width: 100%; height: auto; border-radius: 8px;" />
      </div>

      <h2>Our Mission</h2>
      <p>NIPMO was established to ensure that intellectual property arising from publicly funded research and development is identified, protected, utilized, and commercialized for the benefit of South Africa.</p>

      <h2>Key Functions</h2>
      <ul>
        <li>Implementing and monitoring compliance with the IPR Act</li>
        <li>Supporting technology transfer offices at research institutions</li>
        <li>Providing capacity building and training in IP management</li>
        <li>Facilitating the commercialization of research outputs</li>
        <li>Safeguarding national interests in intellectual property</li>
      </ul>

      <h2>Watch the Video</h2>
      <p>Learn more about NIPMO's role in South Africa's innovation ecosystem by watching the video presentation above.</p>

      <p><strong>Date:</strong> 3 Sep 2025</p>

      <p><strong>Source:</strong> <a href="https://www.nipmo.org/post/national-intellectual-property-management-office" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">NIPMO Official Website</a></p>
    `,
    image: 'https://ext.same-assets.com/4026891959/525007237.jpeg',
    videoUrl: 'https://www.youtube.com/watch?v=Fw5giO5xnwE',
    category: 'In the media',
    author: 'Nipmo Kims',
    date: 'Sep 3, 2025',
    readTime: '1 min read',
    views: '5 views',
    slug: 'nipmo-overview-video',
    featured: true
  },
  {
    id: 19,
    title: 'Always Something New Out of Africa – Innovation at UCT 2024',
    excerpt: 'Discover the groundbreaking research and world-changing ideas coming out of the University of Cape Town (UCT). From pioneering DNA vaccine platforms and sustainable agriculture breakthroughs to cutting-edge cancer therapies and honey authentication technology — this year\'s Innovation at UCT brochure showcases how African ingenuity is shaping global progress.',
    content: `
      <h2>UCT Innovation Excellence 2024</h2>
      <div style="text-align: center; margin: 2rem 0;">
        <img src="https://ext.same-assets.com/4026891959/886445888.png" alt="Innovation at UCT 2024" style="max-width: 100%; height: auto; border-radius: 8px;" />
      </div>

      <p><strong>Discover the groundbreaking research and world-changing ideas coming out of the University of Cape Town (UCT).</strong> From pioneering DNA vaccine platforms and sustainable agriculture breakthroughs to cutting-edge cancer therapies and honey authentication technology — this year's <em>Innovation at UCT</em> brochure showcases how African ingenuity is shaping global progress.</p>

      <h2>📘 Highlights Include:</h2>
      <ul>
        <li><strong>R243 million in equity value</strong> from UCT spin-offs</li>
        <li>A new <strong>keloid treatment and cancer therapy patents</strong></li>
        <li>The rise of <strong>SHAPE innovation</strong> (Social Sciences, Humanities, Arts for People and the Economy)</li>
        <li>Breakthroughs in <strong>clean energy, animal health, and sustainable farming</strong></li>
      </ul>

      <h2>Research & Innovation Impact</h2>
      <p>Explore how UCT's Research Contracts & Innovation (RC&I) continues to turn bold ideas into impactful solutions for South Africa and beyond.</p>

      <p>The Innovation at UCT 2024 brochure provides detailed insights into:</p>
      <ul>
        <li>Pioneering DNA vaccine platforms</li>
        <li>Sustainable agriculture breakthroughs</li>
        <li>Cutting-edge cancer therapies</li>
        <li>Honey authentication technology</li>
        <li>African ingenuity shaping global progress</li>
      </ul>

      <h2>Download the Full Brochure</h2>
      <p>To read the inspiring stories behind these innovations and meet the teams making it happen, download the complete Innovation at UCT 2024 brochure.</p>

      <div style="margin: 2rem 0; padding: 1.5rem; background-color: #f3f4f6; border-radius: 0.5rem; border-left: 4px solid #a4ba36;">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <svg style="width: 3rem; height: 3rem; color: #a4ba36;" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
          </svg>
          <div style="flex: 1;">
            <div style="font-weight: 600; color: #1f2937; margin-bottom: 0.25rem;">rci-innovations-uct-brochure-web.pdf</div>
            <div style="font-size: 0.875rem; color: #6b7280;">Download PDF • 4.73MB</div>
          </div>
          <a href="https://www.nipmo.org/_files/ugd/fcb033_e99bc6ade92d4e52abf6eed7d7c99781.pdf" target="_blank" rel="noopener noreferrer" download style="display: inline-flex; align-items: center; background-color: #a4ba36; color: white; padding: 0.5rem 1rem; border-radius: 0.375rem; text-decoration: none; font-weight: 500; transition: background-color 0.2s;">
            <svg style="width: 1.25rem; height: 1.25rem; margin-right: 0.5rem;" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            Download
          </a>
        </div>
      </div>

      <p><strong>Date:</strong> 4 January 2025</p>

      <p><strong>Source:</strong> <a href="https://www.nipmo.org/post/always-something-new-out-of-africa-innovation-at-uct-2024" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">NIPMO Official Website</a></p>
    `,
    image: 'https://ext.same-assets.com/4026891959/886445888.png',
    category: 'OTT Publications & Articles',
    author: 'Nipmo Kims',
    date: 'Jan 4, 2025',
    readTime: '1 min read',
    views: '8 views',
    slug: 'uct-innovation-2024'
  }
]

interface ArticlePageProps {
  params: Promise<{ id: string }>
}

export default async function ArticleByIdPage({ params }: ArticlePageProps) {
  const resolvedParams = await params
  const id = Number(resolvedParams.id)
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Article not found</h1>
          <p className="text-gray-600 mb-6">We couldn't find the article you're looking for.</p>
          <Link href="/news-insights">
            <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white">Back to News & Insights</Button>
          </Link>
        </div>
      </div>
    )
  }

  const related = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return <ArticleContent post={post} related={related} />
}
