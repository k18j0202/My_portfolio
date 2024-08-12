import "./skills.scss";
import React from 'react';
import styled from 'styled-components';
import { skills } from './Data.jsx';
import { motion } from "framer-motion";

const containerVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1, 
      when: "beforeChildren", 
      staggerChildren: 0.3 
    } 
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  }
};

const SkillItemVariants = {
  hover: { 
    scale: 1.1, 
    transition: { duration: 0.3 } 
  },
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  background: linear-gradient(135deg,#3b1b3f,rgba(124, 3, 124, 0.445));
  padding: 60px 0;
  border-radius:20px;
  border:2px solid rgb(231, 98, 231);
  overflow: hidden;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 24px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled(motion.div)`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: #fff;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const SkillsContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 40px;
  justify-content: center;
`;

const Skill = styled(motion.div)`
  width: 100%;
  max-width: 450px;
 background: linear-gradient(145deg, #3d143d, #500250);
  border-radius: 16px;
  padding: 20px 30px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px;
  transition: background 0.3s ease;
  &:hover {
    background: linear-gradient(145deg, #a144ad, #ba34db);
  }
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 16px 24px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 12px 20px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;

const SkillItem = styled(motion.div)`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <div className="skills">
      <Container id="skills">
        <Wrapper>
          <Title initial="initial" animate="animate" variants={containerVariants}>
            My Skills
          </Title>
          <SkillsContainer initial="initial" animate="animate" variants={containerVariants}>
            {skills.map((skill) => (
              <Skill key={skill.title} variants={itemVariants} whileHover="hover">
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item) => (
                    <SkillItem key={item.title} variants={SkillItemVariants} whileHover="hover" animate="float">
                      <SkillImage src={item.image} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            ))}
          </SkillsContainer>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Skills;
