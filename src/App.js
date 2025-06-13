import React, { useEffect } from 'react';
import '@fontsource/kanit/500.css';
import '@fontsource/rajdhani';
import {
  Box,
  ChakraProvider,
  Flex,
  Text,
  Link,
  Image,
  VStack,
  HStack,
  Icon,
  Container,
  useColorModeValue,
  Button,
  Stack,
  Grid,
  GridItem,
  Center,
  UnorderedList,
  ListItem,
  IconButton,
  Tooltip,
  useBreakpointValue,
  motion,
  keyframes
} from '@chakra-ui/react';
import {
  FaGithub,
  FaLinkedin,
  FaAngellist,
  FaIdBadge,
  FaArrowDown,
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaExternalLinkAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { motion as framerMotion } from 'framer-motion';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { EmailIcon } from '@chakra-ui/icons';
import Projects from './components/Projects';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};

const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px #00ff9d, 0 0 10px #00ff9d, 0 0 15px #00ff9d; }
  50% { box-shadow: 0 0 10px #00ff9d, 0 0 20px #00ff9d, 0 0 30px #00ff9d; }
  100% { box-shadow: 0 0 5px #00ff9d, 0 0 10px #00ff9d, 0 0 15px #00ff9d; }
`;

const MotionBox = framerMotion(Box);
const MotionFlex = framerMotion(Flex);
const MotionStack = framerMotion(Stack);
const MotionGrid = framerMotion(Grid);
const MotionText = framerMotion(Text);
const MotionHeading = framerMotion(Text);

// Create a separate component for the main content
function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Futuristic color scheme
  const bgColor = useColorModeValue('#0a0a0a', '#0a0a0a');
  const textColor = useColorModeValue('#ffffff', '#ffffff');
  const accentColor = useColorModeValue('#00ff9d', '#00ff9d');
  const secondaryAccent = useColorModeValue('#ff00ff', '#ff00ff');
  const cardBg = useColorModeValue('rgba(20, 20, 20, 0.8)', 'rgba(20, 20, 20, 0.8)');
  const borderColor = useColorModeValue('rgba(0, 255, 157, 0.2)', 'rgba(0, 255, 157, 0.2)');
  const gradientStart = useColorModeValue('#00ff9d', '#00ff9d');
  const gradientEnd = useColorModeValue('#ff00ff', '#ff00ff');

  const skillCardStyle = {
    transition: 'all 0.2s',
    _hover: {
      borderColor: accentColor,
      boxShadow: `0 0 20px rgba(0, 255, 157, 0.2)`,
    }
  };

  const imageStyle = {
    transition: 'all 0.2s',
    _hover: {
      filter: 'brightness(0) invert(1) sepia(1) saturate(1000%) hue-rotate(70deg)'
    }
  };

  function handleClick(event, id) {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
    if (isMobile) {
      setIsMenuOpen(false);
    }
  }

  return (
    <Box
      bg={bgColor}
      color={textColor}
      minH="100vh"
      fontFamily="Rajdhani"
      position="relative"
      overflow="hidden"
    >
      {/* Animated background elements */}
      <MotionBox
        position="absolute"
        top="10%"
        right="10%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="rgba(0, 255, 157, 0.05)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <MotionBox
        position="absolute"
        bottom="20%"
        left="5%"
        w="200px"
        h="200px"
        borderRadius="full"
        bg="rgba(255, 0, 255, 0.05)"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Futuristic Navigation */}
      <MotionBox
        as="nav"
        position="fixed"
        w="full"
        zIndex={1000}
        bg="rgba(10, 10, 10, 0.85)"
        backdropFilter="blur(10px)"
        borderBottom="1px"
        borderColor={borderColor}
        py={4}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <MotionText
              as="h1"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="bold"
              bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
              bgClip="text"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              CB
            </MotionText>

            {/* Desktop Navigation */}
            <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
              {['home', 'about', 'experience', 'skills', 'projects'].map((item) => (
                <MotionBox
                  key={item}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={`#${item}`}
                    onClick={(e) => handleClick(e, item)}
                    fontSize="lg"
                    fontWeight="medium"
                    _hover={{ color: accentColor }}
                    transition="color 0.2s"
                    position="relative"
                    _after={{
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: '-2px',
                      left: '0',
                      bg: accentColor,
                      transition: 'width 0.3s ease-in-out',
                    }}
                    _hover={{
                      _after: {
                        width: '100%',
                      },
                    }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </MotionBox>
              ))}
              <Button
                as="a"
                href="https://drive.google.com/file/d/1jjcvTvRAx2JS48Z5sOGADXt5JNde7aIn/view?usp=sharing"
                target="_blank"
                variant="outline"
                borderColor={accentColor}
                color={accentColor}
                _hover={{
                  bg: accentColor,
                  color: bgColor,
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.2s"
              >
                Resume
              </Button>
              <ColorModeSwitcher />
            </HStack>

            {/* Mobile Menu Button */}
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Menu"
              icon={isMenuOpen ? <FaTimes /> : <FaBars />}
              variant="ghost"
              color={accentColor}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </Flex>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <MotionBox
              display={{ base: 'block', md: 'none' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              mt={4}
              p={4}
              bg={cardBg}
              borderRadius="lg"
              border="1px"
              borderColor={borderColor}
            >
              <VStack spacing={4} align="stretch">
                {['home', 'about', 'experience', 'skills', 'projects'].map((item) => (
                  <Link
                    key={item}
                    href={`#${item}`}
                    onClick={(e) => handleClick(e, item)}
                    fontSize="lg"
                    fontWeight="medium"
                    _hover={{ color: accentColor }}
                    transition="color 0.2s"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ))}
                <Button
                  as="a"
                  href="https://drive.google.com/file/d/1jjcvTvRAx2JS48Z5sOGADXt5JNde7aIn/view?usp=sharing"
                  target="_blank"
                  variant="outline"
                  borderColor={accentColor}
                  color={accentColor}
                  _hover={{
                    bg: accentColor,
                    color: bgColor,
                  }}
                >
                  Resume
                </Button>
              </VStack>
            </MotionBox>
          )}
        </Container>
      </MotionBox>

      {/* Hero Section */}
      <Box id="home" minH="100vh" pt={{ base: "120px", md: "100px" }} position="relative">
        <Container maxW="container.xl">
          <Grid
            templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
            gap={12}
            alignItems="center"
          >
            <GridItem>
              <MotionStack
                spacing={6}
                initial="hidden"
                animate="visible"
                variants={slideIn}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <MotionText
                  as="h1"
                  fontSize={{ base: "4xl", md: "6xl" }}
                  fontWeight="bold"
                  bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
                  bgClip="text"
                  variants={scaleIn}
                >
                  Christian Brown
                </MotionText>
                <MotionText
                  as="h2"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  color={textColor}
                  fontWeight="medium"
                  variants={fadeIn}
                >
                  Full Stack Software Engineer
                </MotionText>
                <MotionText
                  fontSize={{ base: "lg", md: "xl" }}
                  color="gray.400"
                  variants={fadeIn}
                >
                  Building the future of web applications with cutting-edge technologies
                </MotionText>
                <MotionStack
                  direction={{ base: "column", sm: "row" }}
                  spacing={4}
                  pt={4}
                  variants={fadeIn}
                >
                  <Button
                    as="a"
                    href="#projects"
                    bg={accentColor}
                    color={bgColor}
                    size="lg"
                    rightIcon={<FaArrowDown />}
                    onClick={(e) => handleClick(e, 'projects')}
                    _hover={{
                      bg: 'transparent',
                      color: accentColor,
                      border: `2px solid ${accentColor}`,
                      transform: 'translateY(-2px)',
                      animation: `${glowAnimation} 2s infinite`,
                    }}
                    transition="all 0.2s"
                  >
                    View Projects
                  </Button>
                  <Button
                    as="a"
                    href="mailto:chrismbh4@gmail.com"
                    variant="outline"
                    borderColor={accentColor}
                    color={accentColor}
                    size="lg"
                    leftIcon={<EmailIcon />}
                    _hover={{
                      bg: accentColor,
                      color: bgColor,
                      transform: 'translateY(-2px)',
                      animation: `${glowAnimation} 2s infinite`,
                    }}
                    transition="all 0.2s"
                  >
                    Contact Me
                  </Button>
                </MotionStack>
                <HStack spacing={6} pt={4}>
                  {[
                    { icon: FaGithub, href: 'https://github.com/chrisbh4', label: 'GitHub' },
                    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/christian-brown-8770311ba/', label: 'LinkedIn' },
                    { icon: FaAngellist, href: 'https://wellfound.com/profile/edit/overview', label: 'Wellfound' }
                  ].map((social) => (
                    <Tooltip key={social.label} label={social.label}>
                      <IconButton
                        as="a"
                        href={social.href}
                        target="_blank"
                        aria-label={social.label}
                        icon={<Icon as={social.icon} />}
                        variant="ghost"
                        size="lg"
                        fontSize="20px"
                        color={accentColor}
                        _hover={{
                          color: secondaryAccent,
                          transform: 'translateY(-2px)',
                          animation: `${glowAnimation} 2s infinite`,
                        }}
                      />
                    </Tooltip>
                  ))}
                </HStack>
              </MotionStack>
            </GridItem>
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ rotate: 2, scale: 1.02 }}
              >
                <Image
                  src="https://imgur.com/N3BB4kx.png"
                  alt="Christian Brown"
                  borderRadius="2xl"
                  boxShadow={`0 0 30px rgba(0, 255, 157, 0.1)`}
                  _hover={{
                    animation: `${glowAnimation} 2s infinite`,
                  }}
                />
              </MotionBox>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" py={20} bg={cardBg} position="relative">
        <Container maxW="container.xl">
          <MotionStack
            spacing={8}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <MotionText
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              textAlign="center"
              bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
              bgClip="text"
              variants={scaleIn}
            >
              About Me
            </MotionText>
            <Grid
              templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
              gap={8}
              alignItems="center"
            >
              <GridItem>
                <MotionText
                  fontSize={{ base: "lg", md: "xl" }}
                  lineHeight="tall"
                  variants={fadeIn}
                >
                  Before diving into software development, I attended Bacone College in Oklahoma on a basketball scholarship.
                  During my free time, I enjoy playing basketball, cooking new recipes, and leveling up my coding skills.
                </MotionText>
              </GridItem>
              <GridItem>
                <MotionText
                  fontSize={{ base: "lg", md: "xl" }}
                  lineHeight="tall"
                  variants={fadeIn}
                >
                  Ever since I built my first full-stack application, my passion for code has skyrocketed. I thrive in fast-paced
                  environments that require goal-oriented communication and love working with new technologies to bring ideas to life.
                </MotionText>
              </GridItem>
            </Grid>
          </MotionStack>
        </Container>
      </Box>

      {/* Experience Section */}
      <Box id="experience" py={20} bg={bgColor} position="relative">
        <Container maxW="container.xl">
          <MotionStack
            spacing={12}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <MotionText
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              textAlign="center"
              bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
              bgClip="text"
              variants={scaleIn}
            >
              Experience
            </MotionText>

            {/* Experience Cards */}
            <Stack spacing={8}>
              {/* Fly.io Experience */}
              <MotionBox
                p={8}
                bg={cardBg}
                borderRadius="xl"
                boxShadow={`0 4px 20px rgba(0, 255, 157, 0.1)`}
                border="1px"
                borderColor={borderColor}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 30px rgba(0, 255, 157, 0.15)`,
                  borderColor: accentColor,
                  animation: `${glowAnimation} 2s infinite`,
                }}
                transition={{ duration: 0.3 }}
              >
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
                  <GridItem>
                    <VStack align="start" spacing={2}>
                      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">Full Stack Engineer</Text>
                      <Text fontSize={{ base: "xl", md: "2xl" }} color={accentColor}>@ Fly.io</Text>
                      <Text color="gray.400">August 2022 - Present</Text>
                    </VStack>
                  </GridItem>
                  <GridItem>
                    <Stack spacing={4}>
                      <Flex wrap="wrap" gap={2}>
                        {['Elixir', 'Phoenix', 'JavaScript', 'Ruby', 'Go', 'Postgres', 'Docker'].map((tech) => (
                          <Box
                            key={tech}
                            px={3}
                            py={1}
                            borderRadius="full"
                            bg="rgba(0, 255, 157, 0.1)"
                            color={accentColor}
                            fontSize="sm"
                            fontWeight="medium"
                          >
                            {tech}
                          </Box>
                        ))}
                      </Flex>
                      <UnorderedList spacing={2} color="gray.300">
                        <ListItem>Architected complex database schemas and queries in PostgreSQL</ListItem>
                        <ListItem>Restructured OAuth authentication system, improving user experience by 30%</ListItem>
                        <ListItem>Collaborated on RESTful and GraphQL API implementation</ListItem>
                        <ListItem>Engineered scalable Ruby applications for high-traffic scenarios</ListItem>
                      </UnorderedList>
                    </Stack>
                  </GridItem>
                </Grid>
              </MotionBox>

              {/* App Academy Experience */}
              <MotionBox
                p={8}
                bg={cardBg}
                borderRadius="xl"
                boxShadow={`0 4px 20px rgba(0, 255, 157, 0.1)`}
                border="1px"
                borderColor={borderColor}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 30px rgba(0, 255, 157, 0.15)`,
                  borderColor: accentColor,
                  animation: `${glowAnimation} 2s infinite`,
                }}
                transition={{ duration: 0.3 }}
              >
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
                  <GridItem>
                    <VStack align="start" spacing={2}>
                      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">Software Engineering Fellow</Text>
                      <Text fontSize={{ base: "xl", md: "2xl" }} color={accentColor}>@ App Academy</Text>
                      <Text color="gray.400">March 2022 - August 2022</Text>
                    </VStack>
                  </GridItem>
                  <GridItem>
                    <Stack spacing={4}>
                      <Flex wrap="wrap" gap={2}>
                        {['JavaScript', 'React', 'Redux', 'Node.js', 'Express', 'PostgreSQL', 'Python', 'Flask'].map((tech) => (
                          <Box
                            key={tech}
                            px={3}
                            py={1}
                            borderRadius="full"
                            bg="rgba(0, 255, 157, 0.1)"
                            color={accentColor}
                            fontSize="sm"
                            fontWeight="medium"
                          >
                            {tech}
                          </Box>
                        ))}
                      </Flex>
                      <UnorderedList spacing={2} color="gray.300">
                        <ListItem>Developed full-stack applications using modern JavaScript frameworks and libraries</ListItem>
                        <ListItem>Implemented RESTful APIs and database schemas using PostgreSQL</ListItem>
                        <ListItem>Created responsive user interfaces with React and Redux</ListItem>
                        <ListItem>Collaborated with peers on group projects using Git and GitHub</ListItem>
                      </UnorderedList>
                    </Stack>
                  </GridItem>
                </Grid>
              </MotionBox>

              {/* Freelance Experience */}
              <MotionBox
                p={8}
                bg={cardBg}
                borderRadius="xl"
                boxShadow={`0 4px 20px rgba(0, 255, 157, 0.1)`}
                border="1px"
                borderColor={borderColor}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 30px rgba(0, 255, 157, 0.15)`,
                  borderColor: accentColor,
                  animation: `${glowAnimation} 2s infinite`,
                }}
                transition={{ duration: 0.3 }}
              >
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
                  <GridItem>
                    <VStack align="start" spacing={2}>
                      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">Software Engineer</Text>
                      <Text fontSize={{ base: "xl", md: "2xl" }} color={accentColor}>@ Freelance</Text>
                      <Text color="gray.400">January 2020 - Current</Text>
                    </VStack>
                  </GridItem>
                  <GridItem>
                    <Stack spacing={4}>
                      <Flex wrap="wrap" gap={2}>
                        {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'GraphQL', 'Vercel', 'Azure', 'Docker', 'MS SQL Server'].map((tech) => (
                          <Box
                            key={tech}
                            px={3}
                            py={1}
                            borderRadius="full"
                            bg="rgba(0, 255, 157, 0.1)"
                            color={accentColor}
                            fontSize="sm"
                            fontWeight="medium"
                          >
                            {tech}
                          </Box>
                        ))}
                      </Flex>
                      <UnorderedList spacing={2} color="gray.300">
                        <ListItem>Architected scalable full-stack solutions using JavaScript, TypeScript, REST and GraphQL APIs, reducing API response times by up to 40%</ListItem>
                        <ListItem>Deployed applications to Vercel and Azure, utilizing CI/CD pipelines and environment configs to streamline releases and maintain 99.9% uptime</ListItem>
                        <ListItem>Delivered production-ready interfaces styled with Tailwind CSS, ensuring mobile-first responsiveness and WCAG 2.1 accessibility compliance</ListItem>
                        <ListItem>Consulted on technical architecture, tooling, and best practices for mid-sized engineering teams</ListItem>
                      </UnorderedList>
                    </Stack>
                  </GridItem>
                </Grid>
              </MotionBox>

              {/* Professional Basketball Experience */}
              <MotionBox
                p={8}
                bg={cardBg}
                borderRadius="xl"
                boxShadow={`0 4px 20px rgba(0, 255, 157, 0.1)`}
                border="1px"
                borderColor={borderColor}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{
                  transform: 'translateY(-4px)',
                  boxShadow: `0 8px 30px rgba(0, 255, 157, 0.15)`,
                  borderColor: accentColor,
                  animation: `${glowAnimation} 2s infinite`,
                }}
                transition={{ duration: 0.3 }}
              >
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
                  <GridItem>
                    <VStack align="start" spacing={2}>
                      <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">Professional Basketball Player</Text>
                      <Text fontSize={{ base: "xl", md: "2xl" }} color={accentColor}>@ Various Teams</Text>
                      <Text color="gray.400">2018 - 2022</Text>
                    </VStack>
                  </GridItem>
                  <GridItem>
                    <Stack spacing={4}>
                      <Flex wrap="wrap" gap={2}>
                        {['Leadership', 'Teamwork', 'Communication', 'Discipline', 'Adaptability'].map((skill) => (
                          <Box
                            key={skill}
                            px={3}
                            py={1}
                            borderRadius="full"
                            bg="rgba(0, 255, 157, 0.1)"
                            color={accentColor}
                            fontSize="sm"
                            fontWeight="medium"
                          >
                            {skill}
                          </Box>
                        ))}
                      </Flex>
                      <UnorderedList spacing={2} color="gray.300">
                        <ListItem>Demonstrated exceptional leadership skills in high-pressure environments</ListItem>
                        <ListItem>Collaborated effectively with diverse international teams</ListItem>
                        <ListItem>Maintained peak physical and mental performance through rigorous training</ListItem>
                        <ListItem>Adapted quickly to different playing styles and team dynamics</ListItem>
                      </UnorderedList>
                    </Stack>
                  </GridItem>
                </Grid>
              </MotionBox>
            </Stack>
          </MotionStack>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box id="skills" py={20} bg={cardBg} position="relative">
        <Container maxW="container.xl">
          <MotionStack
            spacing={12}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <MotionText
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              textAlign="center"
              bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
              bgClip="text"
              variants={scaleIn}
            >
              Skills & Technologies
            </MotionText>

            <Grid
              templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
              gap={6}
            >
              {[
                { name: 'JavaScript', icon: 'https://devicon-website.vercel.app/api/javascript/original.svg' },
                { name: 'Python', icon: 'https://devicon-website.vercel.app/api/python/original-wordmark.svg' },
                { name: 'Elixir', icon: 'https://devicon-website.vercel.app/api/elixir/original-wordmark.svg' },
                { name: 'Ruby', icon: 'https://devicon-website.vercel.app/api/ruby/original-wordmark.svg' },
                { name: 'Go', icon: 'https://devicon-website.vercel.app/api/go/original-wordmark.svg' },
                { name: 'HTML5', icon: 'https://devicon-website.vercel.app/api/html5/original-wordmark.svg' },
                { name: 'CSS3', icon: 'https://devicon-website.vercel.app/api/css3/original-wordmark.svg' },
                { name: 'React', icon: 'https://devicon-website.vercel.app/api/react/original.svg' },
                { name: 'Redux', icon: 'https://devicon-website.vercel.app/api/redux/original.svg' },
                { name: 'Express', icon: 'https://devicon-website.vercel.app/api/express/original.svg' },
                { name: 'Node.js', icon: 'https://devicon-website.vercel.app/api/nodejs/original-wordmark.svg' },
                { name: 'Phoenix', icon: 'https://devicon-website.vercel.app/api/phoenix/original-wordmark.svg' },
                { name: 'Rails', icon: 'https://devicon-website.vercel.app/api/rails/original-wordmark.svg' },
                { name: 'PostgreSQL', icon: 'https://devicon-website.vercel.app/api/postgresql/original-wordmark.svg' },
                { name: 'Flask', icon: 'https://devicon-website.vercel.app/api/flask/original.svg' },
                { name: 'SQLAlchemy', icon: 'https://devicon-website.vercel.app/api/sqlalchemy/original.svg' },
                { name: 'Sequelize', icon: 'https://devicon-website.vercel.app/api/sequelize/original.svg' },
                { name: 'Docker', icon: 'https://devicon-website.vercel.app/api/docker/original-wordmark.svg' },
                { name: 'AWS', icon: 'https://devicon-website.vercel.app/api/amazonwebservices/original-wordmark.svg' },
                { name: 'Tailwind CSS', icon: 'https://devicon-website.vercel.app/api/tailwindcss/original-wordmark.svg' },
                { name: 'Git', icon: 'https://devicon-website.vercel.app/api/git/original.svg' },
                { name: 'GitHub', icon: 'https://devicon-website.vercel.app/api/github/original-wordmark.svg' },
                { name: 'Heroku', icon: 'https://devicon-website.vercel.app/api/heroku/original.svg' },
                { name: 'Google Cloud', icon: 'https://devicon-website.vercel.app/api/google/original.svg' }
              ].map((tech) => (
                <MotionBox
                  key={tech.name}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <VStack
                    p={4}
                    bg={bgColor}
                    borderRadius="xl"
                    border="1px"
                    borderColor={borderColor}
                    {...skillCardStyle}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      boxSize={{ base: '50px', md: '70px' }}
                      filter="brightness(0) invert(1)"
                      {...imageStyle}
                    />
                    <Text fontSize="sm" color="gray.400">{tech.name}</Text>
                  </VStack>
                </MotionBox>
              ))}
            </Grid>
          </MotionStack>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="projects" py={20} bg={bgColor} position="relative">
        <Container maxW="container.2xl">
          <MotionStack
            spacing={12}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <MotionText
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              textAlign="center"
              bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
              bgClip="text"
              variants={scaleIn}
            >
              Featured Projects
            </MotionText>
            <Projects />
          </MotionStack>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" py={20} bg={cardBg} position="relative">
        <Container maxW="container.xl">
          <MotionStack
            spacing={8}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            align="center"
          >
            <MotionText
              as="h2"
              fontSize={{ base: "3xl", md: "4xl" }}
              textAlign="center"
              bgGradient={`linear(to-r, ${gradientStart}, ${gradientEnd})`}
              bgClip="text"
              variants={scaleIn}
            >
              Let's Connect
            </MotionText>
            <Text fontSize={{ base: "lg", md: "xl" }} textAlign="center" maxW="2xl" color="gray.300">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </Text>
            <MotionStack
              direction={{ base: "column", sm: "row" }}
              spacing={6}
              pt={4}
              variants={fadeIn}
            >
              <Button
                as="a"
                href="mailto:chrismbh4@gmail.com"
                size="lg"
                bg={accentColor}
                color={bgColor}
                leftIcon={<EmailIcon />}
                _hover={{
                  bg: 'transparent',
                  color: accentColor,
                  border: `2px solid ${accentColor}`,
                  transform: 'translateY(-2px)',
                  animation: `${glowAnimation} 2s infinite`,
                }}
                transition="all 0.2s"
              >
                Email Me
              </Button>
              <Button
                as="a"
                href="https://drive.google.com/file/d/1jjcvTvRAx2JS48Z5sOGADXt5JNde7aIn/view?usp=sharing"
                target="_blank"
                size="lg"
                variant="outline"
                borderColor={accentColor}
                color={accentColor}
                rightIcon={<FaExternalLinkAlt />}
                _hover={{
                  bg: accentColor,
                  color: bgColor,
                  transform: 'translateY(-2px)',
                  animation: `${glowAnimation} 2s infinite`,
                }}
                transition="all 0.2s"
              >
                View Resume
              </Button>
            </MotionStack>
          </MotionStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        as="footer"
        py={8}
        borderTop="1px"
        borderColor={borderColor}
        bg={bgColor}
      >
        <Container maxW="container.xl">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            spacing={4}
          >
            <Text color="gray.400">© 2024 Christian Brown. All rights reserved.</Text>
            <HStack spacing={6}>
              {[
                { icon: FaGithub, href: 'https://github.com/chrisbh4', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/christian-brown-8770311ba/', label: 'LinkedIn' },
                { icon: FaAngellist, href: 'https://wellfound.com/profile/edit/overview', label: 'Wellfound' }
              ].map((social) => (
                <Tooltip key={social.label} label={social.label}>
                  <IconButton
                    as="a"
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    icon={<Icon as={social.icon} />}
                    variant="ghost"
                    size="lg"
                    fontSize="20px"
                    color={accentColor}
                    _hover={{
                      color: secondaryAccent,
                      transform: 'translateY(-2px)',
                      animation: `${glowAnimation} 2s infinite`,
                    }}
                  />
                </Tooltip>
              ))}
            </HStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

// Main App component
function App() {
  return (
    <ChakraProvider>
      <AppContent />
    </ChakraProvider>
  );
}

export default App;
