import Container from '@/components/Container';
import Paragraph from '@/components/Paragraph';
import Title from '@/components/Title';
import Header from '@/components/Header';
import Image from 'next/image';

export default function Team() {
  return (
    <Container>
      <Header>
        <Title>Meet the team</Title>
        <Paragraph>
          We’re a dynamic group of individuals who are passionate about what we do and dedicated to
          delivering the best results for our clients.
        </Paragraph>
      </Header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {[
          { name: 'Grant Miller', role: 'CEO', img: '/grant.jpg' },
          { name: 'Nathan Demers', role: 'Training & Nutrition Coach', img: '/nathan.jpg' },
        ].map((member, idx) => (
          <div key={idx} className="flex flex-col">
            {/* Image container with defined dimensions */}
            <div className="relative w-full h-80">
              <Image className="rounded-lg object-cover" src={member.img} alt={member.name} fill />
            </div>
            {/* Text content */}
            <h3 className="mt-4 text-lg font-medium">{member.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
      {/* <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <Image
            src="/grant2.jpg" // Replace with your image path
            alt="Testimonial Author"
            width={600} // Adjust size as needed
            height={600}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        <div className="flex flex-col justify-center bg-gradient-to-r from-indigo-800 via-purple-800 to-indigo-900 text-white rounded-lg p-8 shadow-lg">
          <svg
            className="w-12 h-12 text-gray-400 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          <p className="text-xl font-medium">
            Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc
            suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum
            eget tellus non nibh scelerisque bibendum.
          </p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Judith Black</h3>
            <p className="text-sm font-light">CEO of Tuple</p>
          </div>
        </div>
      </div>
    </div>
  </div> */}
    </Container>
  );
}
