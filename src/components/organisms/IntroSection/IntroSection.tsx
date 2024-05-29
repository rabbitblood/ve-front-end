import {
  HtmlHTMLAttributes,
  LegacyRef,
  forwardRef,
  // useState
} from "react";
import HorizontalMoveImageViewer, {
  HorizontalMoveImageViewerRef,
} from "@/components/atoms/HorizontalMoveImageViewer/HorizontalMoveImageViewer";
import "./IntroSection.css";
import { FormButton } from "@/components/atoms/FormButton/FormButton";
import { Link } from "react-router-dom";
import { StringToUppercasedFirstLetterParagraphElement } from "@/lib/util/paragraphUtil";
import { motion } from "framer-motion";

interface IntroSectionProps extends HtmlHTMLAttributes<HTMLElement> {
  title: string;
  subTitle: string;
  images: string[];
  description: string;
  exploreUrl: string;
  onImageChange?: (index: number) => void;
}

const IntroSection = forwardRef(
  (props: IntroSectionProps, ref: LegacyRef<HorizontalMoveImageViewerRef>) => {
    //framer animations
    const displaySectionAnimationVariant = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.5,
        },
      },
    };

    const detailSectionAnimationVariant = {
      hidden: {
        opacity: 0,
        transform: "translateX(-100px)",
      },
      visible: {
        opacity: 1,
        transform: "translateX(0px)",
        transition: {
          delay: 0.5,
          duration: 0.5,
          staggerChildren: 2,
        },
      },
    };

    const detailChildrenAnimationVariant = {
      hidden: {
        opacity: 0,
        transform: "translateX(-100px)",
      },
      visible: {
        opacity: 1,
        transform: "translateX(0px)",
        transition: {
          staggerChildren: 0.6,
        },
      },
    };

    return (
      <section className="introduction-section">
        <motion.div
          className="display"
          variants={displaySectionAnimationVariant}
          initial="hidden"
          animate="visible"
        >
          <HorizontalMoveImageViewer
            ref={ref}
            images={props.images}
            onImageChange={props.onImageChange}
            showArrow={true}
          />
        </motion.div>
        <motion.div
          className="details"
          variants={detailSectionAnimationVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="info-container"
            variants={detailChildrenAnimationVariant}
          >
            <motion.h2
              className="title"
              variants={detailChildrenAnimationVariant}
            >
              {props.title}
            </motion.h2>
            <motion.h3
              className="sub-title"
              variants={detailChildrenAnimationVariant}
            >
              {props.subTitle}
            </motion.h3>
            <motion.div variants={detailChildrenAnimationVariant}>
              <StringToUppercasedFirstLetterParagraphElement
                str={props.description}
                elementClassName="paragraph desc"
                spanClassName="first-letter"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="form-button-container"
            variants={detailChildrenAnimationVariant}
          >
            <Link to={props.exploreUrl as string}>
              <FormButton>Explore More</FormButton>{" "}
            </Link>
          </motion.div>
        </motion.div>
        {props.children}
      </section>
    );
  }
);

export default IntroSection;
