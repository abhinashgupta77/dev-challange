import React from 'react'
import './Categories.scss';
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import ListItemText from "@material-ui/core/ListItemText";

const CategoriesTree = ({ data }) => {

  return (
    <div className="categories__tree">
      <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          defaultExpanded={["0"]}
        >
          <TreeItem
            nodeId="0"
            label={
              <ListItemText
                primary="All Categories"
                secondary="Ecommerce patterns"
              />
            }
          >
            <TreeItem nodeId="1" label="Electronics">
              <TreeItem nodeId="2" label="Cell Phones & Smartphones">
                <TreeItem
                  nodeId="3"
                  label="Cell Phone Accessories"
                  className="categories__tree__item"
                />
                <TreeItem
                  nodeId="4"
                  label="Cell Phone Gatgets"
                  className="categories__tree__item"
                />
                <TreeItem
                  nodeId="3"
                  label="Applications"
                  className="categories__tree__item"
                />
                <TreeItem
                  nodeId="4"
                  label="Smart Watches"
                  className="categories__tree__item"
                />
                <button className="categories__tree__showmore__button">
                  Show More {<ExpandMoreIcon />}
                </button>
              </TreeItem>
            </TreeItem>
            <TreeItem nodeId="5" label="Business & Industrial">
              <TreeItem
                nodeId="6"
                label="Material-UI"
                className="categories__tree__item"
              />
            </TreeItem>

            <TreeItem
              nodeId="10"
              label={
                <ListItemText
                  primary="Computers"
                  secondary="Tablets & Networking"
                />
              }
            >
              <TreeItem
                nodeId="123"
                label="Dell"
                className="categories__tree__item"
              />
            </TreeItem>

            <TreeItem nodeId="11" label="Consumer Electroinics">
              <TreeItem
                nodeId="12"
                label="Headphones"
                className="categories__tree__item"
              />
            </TreeItem>

            <TreeItem nodeId="15" label="Home & Garden">
              <TreeItem
                nodeId="13"
                label="Home Product"
                className="categories__tree__item"
              />
            </TreeItem>

            <TreeItem nodeId="20" label="Collectibles">
              <TreeItem
                nodeId="21"
                label="Material"
                className="categories__tree__item"
              />
            </TreeItem>

            <button className="categories__tree__showmore__button button--expand">
              Expand
            </button>
          </TreeItem>
        </TreeView> 
    </div>
  );
};

export default CategoriesTree


