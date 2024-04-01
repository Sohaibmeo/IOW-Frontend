import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Style from './Accordian.module.scss';
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Box className={Style.list}>
        <Accordion className={Style.listBg} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Projections
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            HoneyBricks can not provide any assurance of returns provided by the Sponsor and there can be no assurance that any Projections are appropriate or adequate.  The Sponsor’s Projections and resulting financial returns are ratios are hypothetical, are not based on actual investment results, and are presented solely for the purpose of providing insight into the Sponsor’s investment objectives, detailing its anticipated risk and reward characteristics and for establishing a benchmark for future evaluation of the Sponsor’s performance. Projections should not be used as a primary basis for an investor’s decision to invest.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box className={Style.list}>
        <Accordion className={Style.listBg} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>No Approval or Warranty by HoneyBricks</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              HoneyBricks makes no representations or warranties as to the accuracy of such information and accepts no liability.  The opinions expressed on this page are solely the opinions of the Sponsor and its affiliates and none of the opinions expressed are the opinions of, nor are they endorsed by HoneyBricks.
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
              varius pulvinar diam eros in elit. Pellentesque convallis laoreet
              laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box className={Style.list}>
        <Accordion className={Style.listBg} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Risk of Investment
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            This real estate investment is speculative and involves substantial risk.  There can be no assurances that all or any of the assumptions will be true or that actual performance will bear any relation to the hypothetical illustrations herein, and no guarantee or representation is made that investment objectives of the Sponsor will be achieved.  In the event that actual performance is below the Sponsor’s targets, your investment could be materially and adversely affected, and there can be no assurance that investors will not suffer significant losses.  A loss of part or all of the principal value of your investment may occur.  You should not invest unless you can readily bear the consequences of such loss.  Please see the Sponsor’s Investment Documents for additional information, including the Sponsor’s discussion concerning risk factors.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box className={Style.list}>
        <Accordion className={Style.listBg} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Offering is Not Registered</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            The interests offered by HoneyBricks and/or the Sponsor will not be registered under the Securities Act of 1933, as amended (the “Securities Act”) in reliance upon the exemptions from registration pursuant to Rule 506(b) or Rule 506(c) of Regulation D, or Regulation S as promulgated under the Securities Act (“Private Placement.”).  In addition, the interests will not be registered under any state securities laws in reliance on exemptions from registration.  Such interests are subject to restrictions on transferability and resale and may not be transferred or resold except as permitted under applicable state and federal securities laws pursuant to registration or an available exemption.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box className={Style.list}>
        <Accordion className={Style.listBg} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Fees and Conflicts</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            HoneyBricks Technology LLC (an affiliate of HoneyBricks) charges a fixed, non-percentage-based licensing fee for real estate companies and their sponsors to license and use the proprietary technology platform, including one-time flat licensing fees for its technology and an ongoing quarterly flat licensing fees for its administration solution.  The licensing fees received by HoneyBricks are disclosed in the relevant operating agreement(s). Additionally, employees and personnel of HoneyBricks invest in sponsor offerings on the same commercial terms as other investors.  HoneyBricks receipt of licensing fees and its employee and personnel investments in Sponsor’s offering creates a conflict of interest between HoneyBricks and its affiliates, and investors or prospective investors.          </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box className={Style.list}>
        <Accordion className={Style.listBg} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Not Financial Advice</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            No communication by HoneyBricks should be construed or is intended to be a recommendation to purchase, sell or hold any securities or otherwise to be investment, tax, financial, accounting, legal, regulatory or compliance advice.  Nothing on this website is intended as an offer to extend credit, an offer to purchase or sell securities or a solicitation of any securities transaction.  The information contained on the Site has been prepared by HoneyBricks without reference to any particular user's investment requirements or financial situation, and potential investors are encouraged to consult with professional tax, legal and financial advisors before making any investment.          </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}